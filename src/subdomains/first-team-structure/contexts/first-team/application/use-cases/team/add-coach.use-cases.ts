import { AddedCoachEventPublisher, AgeValueObject, CoachDomainEntity, CountryValueObject, FullNameValueObject, IAddCoachCommand, IAddedCoachResponse, ICoachDomainEntity, ITeamDomainService, TeamAggregate, WageValueObject } from "../../../domain";
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase, ValueObjectException } from "src/libs";

export class AddCoachUseCases<
    Command extends IAddCoachCommand,
    Response extends IAddedCoachResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly teamAggregate: TeamAggregate;

    constructor(
        private readonly teamService: ITeamDomainService,
        private readonly addedCoachEventPublisher: AddedCoachEventPublisher,
    ) {
        super();
        this.teamAggregate = new TeamAggregate({teamService, addedCoachEventPublisher})
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command): Promise<CoachDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        const entity = this.createEntityCoachDomain(ValueObject);

        return this.executeMatchAggregateRoot(entity)
    }
    
    createValueObject(command: Command): ICoachDomainEntity {
        const age = new AgeValueObject(command.age);
        const wage = new WageValueObject(command.wage);
        const fullName = new FullNameValueObject(command.fullName);
        const country = new CountryValueObject(command.country);

        return {age, wage, fullName, country}
    }
    
    validateValueObject(valueObject: ICoachDomainEntity): void {
        const {
            age,
            wage,
            fullName,
            country
        } = valueObject;

        if(age instanceof AgeValueObject && age.hasErrors()) this.setErrors(age.getErrors());

        if(wage instanceof WageValueObject && wage.hasErrors()) this.setErrors(wage.getErrors());
        
        if(fullName instanceof FullNameValueObject && fullName.hasErrors()) this.setErrors(fullName.getErrors());

        if(country instanceof CountryValueObject && country.hasErrors()) this.setErrors(country.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'AddCoachUseCase got some errors',
            this.getErrors(),
        );
    }

    createEntityCoachDomain(valueObject: ICoachDomainEntity): CoachDomainEntity {
        const {
            age,
            wage,
            fullName,
            country
        } = valueObject;

        return new CoachDomainEntity({
            age: age.valueOf(),
            wage: wage.valueOf(),
            fullName: fullName.valueOf(),
            country: country.valueOf()
        })
    }

    executeMatchAggregateRoot(entity: CoachDomainEntity): Promise<CoachDomainEntity | null> {
        return this.teamAggregate.addCoach(entity);
    }
}

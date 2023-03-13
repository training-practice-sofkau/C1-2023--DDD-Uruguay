import { AddedPlayerEventPublisher, AgeValueObject, CountryValueObject, FullNameValueObject, IAddedPlayerResponse, IAddPlayerCommand, IGetTeamCommand, IGotTeamReponse, ITeamDomainService, PositionValueObject, WageValueObject } from "../../../domain";
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase, ValueObjectException } from "src/libs";
import { PlayerDomainEntity } from '../../../domain/entities/team/player.domain-entity';
import { TeamAggregate } from '../../../domain/aggregates/team.aggregate';
import { IPlayerDomainEntity } from '../../../domain/entities/interfaces/team/player.domain-entity.interface';
import { TeamDomainEntity } from '../../../domain/entities/team.domain-entity';
import { GetTeamUseCase } from "./get-team.use-cases";

export class AddPlayerUseCases<
    Command extends IAddPlayerCommand,
    Response extends IAddedPlayerResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly teamAggregate: TeamAggregate;

    constructor(
        private readonly teamService: ITeamDomainService,
        private readonly addedPlayerEventPublisher: AddedPlayerEventPublisher,
        private readonly getTeamUseCase: GetTeamUseCase<IGetTeamCommand, IGotTeamReponse>
    ) {
        super();
        this.teamAggregate = new TeamAggregate({teamService, addedPlayerEventPublisher})
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command): Promise<PlayerDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        const entity = this.createEntityPlayerDomain(ValueObject);

        return this.executeMatchAggregateRoot(entity)
    }
    
    createValueObject(command: Command): IPlayerDomainEntity {
        const age = new AgeValueObject(command.age);
        const wage = new WageValueObject(command.wage);
        const position = new PositionValueObject(command.position);
        const fullName = new FullNameValueObject(command.fullName);
        const country = new CountryValueObject(command.country);

        let team: TeamDomainEntity;

        this.getTeamUseCase.execute({teamId: command.teamId})
        .then(iTeam => team = iTeam.data)
        .catch(() => new Error('Entity Not Found'));

        return {team, age, wage, position, fullName, country}
    }
    
    validateValueObject(valueObject: IPlayerDomainEntity): void {
        const {
            age,
            wage,
            position,
            fullName,
            country
        } = valueObject;

        if(age instanceof AgeValueObject && age.hasErrors()) this.setErrors(age.getErrors());

        if(wage instanceof WageValueObject && wage.hasErrors()) this.setErrors(wage.getErrors());
        
        if(position instanceof PositionValueObject && position.hasErrors()) this.setErrors(position.getErrors());

        if(fullName instanceof FullNameValueObject && fullName.hasErrors()) this.setErrors(fullName.getErrors());

        if(country instanceof CountryValueObject && country.hasErrors()) this.setErrors(country.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'AddPlayerUseCase got some errors',
            this.getErrors(),
        );
    }

    createEntityPlayerDomain(valueObject: IPlayerDomainEntity): PlayerDomainEntity {
        const {
            team,
            age,
            wage,
            position,
            fullName,
            country
        } = valueObject;

        return new PlayerDomainEntity({
            team: team,
            age: age.valueOf(),
            wage: wage.valueOf(),
            position: position.valueOf(),
            fullName: fullName.valueOf(),
            country: country.valueOf()
        })
    }

    executeMatchAggregateRoot(entity: PlayerDomainEntity): Promise<PlayerDomainEntity | null> {
        return this.teamAggregate.addPlayer(entity);
    }
}
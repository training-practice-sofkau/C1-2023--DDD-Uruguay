import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { AddedRivalEventPublisher, IAddedRivalResponse, IAddRivalCommand, IMatchDomainService, IRivalDomainEntity, MatchAggregate, NameValueObject, RivalDomainEntity, TownValueObject } from "../../../domain";

export class AddRivalUseCase<
    Command extends IAddRivalCommand = IAddRivalCommand,
    Response extends IAddedRivalResponse = IAddedRivalResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{

    private readonly matchAggregate: MatchAggregate;

    constructor(
        private readonly matchService: IMatchDomainService,
        private readonly addedRivalEventPublisher: AddedRivalEventPublisher,
    ) {
        super();
        this.matchAggregate = new MatchAggregate({matchService, addedRivalEventPublisher})
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command): Promise<RivalDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        const entity = this.createEntityRivalDomain(ValueObject);

        return this.executeMatchAggregateRoot(entity)
    }
    
    createValueObject(command: Command): IRivalDomainEntity {
        const name = new NameValueObject(command.name);
        const town = new TownValueObject(command.town);

        return {name, town}
    }
    
    validateValueObject(valueObject: IRivalDomainEntity): void {
        const {
            name,
            town
        } = valueObject;

        if(name instanceof NameValueObject && name.hasErrors()) this.setErrors(name.getErrors());

        if(town instanceof TownValueObject && town.hasErrors()) this.setErrors(town.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'AddRivalUseCase got some errors',
            this.getErrors(),
        );
    }

    createEntityRivalDomain(valueObject: IRivalDomainEntity): RivalDomainEntity {
        const {
            name,
            town
        } = valueObject

        return new RivalDomainEntity({
            name: name.valueOf(),
            town: town.valueOf()
        })
    }

    executeMatchAggregateRoot(entity: RivalDomainEntity): Promise<RivalDomainEntity | null> {
        return this.matchAggregate.addRival(entity);
    }
}
import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { IRivalDomainService, IUpdatedRivalTownResponse, IUpdateRivalTownCommand, MatchAggregate, RivalDomainEntity, TownValueObject, UpdatedRivalTownEventPublisher } from "../../../domain";

export class UpdateRivalTownUseCases<
Command extends IUpdateRivalTownCommand,
Response extends IUpdatedRivalTownResponse
> 
extends ValueObjectErrorHandler
implements IUseCase<Command, Response> {
    private readonly matchAggregate: MatchAggregate;

    constructor(
        private readonly rivalService: IRivalDomainService,
        private readonly updatedRivalTownEventPublisher: UpdatedRivalTownEventPublisher,
    ) {
        super();
        this.matchAggregate = new MatchAggregate({rivalService, updatedRivalTownEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeMatchAggregateRoot({rivalId: command.rivalId, town: ValueObject} as Command)
    }

    createValueObject(command: Command): TownValueObject {
        if(command.town instanceof TownValueObject) return command.town
        return new TownValueObject(command.town);
    }

    validateValueObject(valueObject: TownValueObject) {

        if(valueObject instanceof TownValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdateRivalUseCase got some errors',
            this.getErrors(),
        );
    }

    executeMatchAggregateRoot(update: Command): Promise<RivalDomainEntity | null> {
        return this.matchAggregate.updateRivalTown(update);
    }
}

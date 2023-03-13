import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { IStadiumDomainService, IUpdatedStadiumCapacityResponse, IUpdateStadiumCapacity, MatchAggregate, StadiumDomainEntity, UpdatedStadiumCapacityEventPublisher } from "../../../domain";
import { CapacityValueObject } from '../../../domain/value-objects/match/stadium/capacity/capacity.value-object';

export class UpdateStadiumCapacityUseCases<
Command extends IUpdateStadiumCapacity,
Response extends IUpdatedStadiumCapacityResponse
> 
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>  {
    private readonly matchAggregate: MatchAggregate;

    constructor(
        private readonly stadiumService: IStadiumDomainService,
        private readonly updatedStadiumCapacityEventPublisher: UpdatedStadiumCapacityEventPublisher,
    ) {
        super();
        this.matchAggregate = new MatchAggregate({stadiumService, updatedStadiumCapacityEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeMatchAggregateRoot({stadiumId: command.stadiumId, capacity: ValueObject} as Command)
    }

    createValueObject(command: Command): CapacityValueObject {
        if(command.capacity instanceof CapacityValueObject) return command.capacity
        return new CapacityValueObject(command.capacity);
    }

    validateValueObject(valueObject: CapacityValueObject) {

        if(valueObject instanceof CapacityValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdateCapacityUseCase got some errors',
            this.getErrors(),
        );
    }

    executeMatchAggregateRoot(update: Command): Promise<StadiumDomainEntity | null> {
        return this.matchAggregate.updateStadiumCapacity(update);
    }
}

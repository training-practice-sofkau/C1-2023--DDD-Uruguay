import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { DurationValueObject, ITrainingDomainService, IUpdatedDurationResponse, IUpdateDurationCommand, TrainingAggregate, TrainingDomainEntity } from "../../../domain";
import { UpdatedDurationEventPublisher } from "../../../domain/events/publishers/training";

export class UpdateDurationUseCases<
    Command extends IUpdateDurationCommand,
    Response extends IUpdatedDurationResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainingService: ITrainingDomainService,
        private readonly updatedDurationEventPublisher: UpdatedDurationEventPublisher,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainingService, updatedDurationEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeTrainingAggregateRoot({trainingId: command.trainingId, duration: ValueObject} as Command)
    }

    createValueObject(command: Command): DurationValueObject {
        if(command.duration instanceof DurationValueObject) return command.duration
        return new DurationValueObject(command.duration);
    }

    validateValueObject(valueObject: DurationValueObject) {

        if(valueObject instanceof DurationValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdateDurationUseCase got some errors',
            this.getErrors(),
        );
    }

    executeTrainingAggregateRoot(update: Command): Promise<TrainingDomainEntity | null> {
        return this.trainingAggregate.updateDuration(update);
    }
}
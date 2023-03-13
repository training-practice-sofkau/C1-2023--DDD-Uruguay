import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { DurationValueObject, ITrainingDomainService, IUpdatedNameResponse, IUpdateNameCommand, NameValueObject, TrainingAggregate, TrainingDomainEntity } from "../../../domain";
import { UpdatedNameEventPublisher } from "../../../domain/events/publishers/training";

export class UpdateNameUseCases<
    Command extends IUpdateNameCommand,
    Response extends IUpdatedNameResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainingService: ITrainingDomainService,
        private readonly updatedNameEventPublisher: UpdatedNameEventPublisher,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainingService, updatedNameEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeTrainingAggregateRoot({trainingId: command.trainingId, name: ValueObject} as Command)
    }

    createValueObject(command: Command): NameValueObject {
        if(command.name instanceof NameValueObject) return command.name
        return new NameValueObject(command.name);
    }

    validateValueObject(valueObject: NameValueObject) {

        if(valueObject instanceof NameValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdateTrainingNameUseCase got some errors',
            this.getErrors(),
        );
    }

    executeTrainingAggregateRoot(update: Command): Promise<TrainingDomainEntity | null> {
        return this.trainingAggregate.updateName(update);
    }
}

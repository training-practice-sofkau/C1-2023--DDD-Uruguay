import { ITrainingDomainService, ITrainingFieldDomainService, IUpdatedTrainingFieldNameResponse, IUpdateTrainingFieldNameCommand, NameValueObject, TrainingAggregate, TrainingFieldDomainEntity } from "../../../domain";
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase, ValueObjectException } from "src/libs";
import { UpdatedTrainingFieldNameEventPublisher } from "../../../domain/events/publishers/training";

export class UpdateTrainingFieldNameUseCases<
    Command extends IUpdateTrainingFieldNameCommand,
    Response extends IUpdatedTrainingFieldNameResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainingFieldService: ITrainingFieldDomainService,
        private readonly updatedTrainingFieldNameEventPublisher: UpdatedTrainingFieldNameEventPublisher,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainingFieldService, updatedTrainingFieldNameEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeTrainingAggregateRoot({trainingFieldId: command.trainingFieldId, name: ValueObject} as Command)
    }

    createValueObject(command: Command): NameValueObject {
        if(command.name instanceof NameValueObject) return command.name
        return new NameValueObject(command.name);
    }

    validateValueObject(valueObject: NameValueObject) {

        if(valueObject instanceof NameValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdateTrainingFieldNameUseCase got some errors',
            this.getErrors(),
        );
    }

    executeTrainingAggregateRoot(update: Command): Promise<TrainingFieldDomainEntity | null> {
        return this.trainingAggregate.updateTrainingFieldName(update);
    }
}

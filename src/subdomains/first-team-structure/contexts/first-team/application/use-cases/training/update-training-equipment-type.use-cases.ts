import { ITrainingDomainService, ITrainingEquipmentDomainService, IUpdatedTrainingEquipmentTypeResponse, IUpdateTrainingEquipmentTypeCommand, TrainingAggregate, TrainingEquipmentDomainEntity, TypeValueObject } from "../../../domain";
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase, ValueObjectException } from "src/libs";
import { UpdatedTrainingEquipmentTypeEventPublisher } from "../../../domain/events/publishers/training";

export class UpdateTrainingEquipmentTypeUseCases<
    Command extends IUpdateTrainingEquipmentTypeCommand,
    Response extends IUpdatedTrainingEquipmentTypeResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainingEquipmentService: ITrainingEquipmentDomainService,
        private readonly updatedTrainingEquipmentTypeEventPublisher: UpdatedTrainingEquipmentTypeEventPublisher,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainingEquipmentService, updatedTrainingEquipmentTypeEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeTrainingAggregateRoot({trainingEquipmentId: command.trainingEquipmentId, type: ValueObject} as Command)
    }

    createValueObject(command: Command): TypeValueObject {
        if(command.type instanceof TypeValueObject) return command.type
        return new TypeValueObject(command.type);
    }

    validateValueObject(valueObject: TypeValueObject) {

        if(valueObject instanceof TypeValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdateTrainingEquipmentTypeUseCase got some errors',
            this.getErrors(),
        );
    }

    executeTrainingAggregateRoot(update: Command): Promise<TrainingEquipmentDomainEntity | null> {
        return this.trainingAggregate.updateTrainingEquipmentType(update);
    }
}

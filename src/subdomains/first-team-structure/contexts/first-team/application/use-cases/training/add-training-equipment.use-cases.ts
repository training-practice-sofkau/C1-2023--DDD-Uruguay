import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { AddedTrainingEquipmentEventPublisher, IAddedTrainingEquipmentResponse, IAddTrainingEquipmentCommand, ITrainingDomainService, ITrainingEquipmentDomainEntity, NameValueObject, TrainingAggregate, TrainingEquipmentDomainEntity, TypeValueObject } from "../../../domain";

export class AddTrainingEquipmentUseCases<
    Command extends IAddTrainingEquipmentCommand,
    Response extends IAddedTrainingEquipmentResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainingService: ITrainingDomainService,
        private readonly addedTrainingEquipmentEventPublisher: AddedTrainingEquipmentEventPublisher,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainingService, addedTrainingEquipmentEventPublisher})
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command): Promise<TrainingEquipmentDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        const entity = this.createEntityTrainingEquipmentDomain(ValueObject);

        return this.executeTrainingAggregateRoot(entity)
    }
    
    createValueObject(command: Command): ITrainingEquipmentDomainEntity {
        const name = new NameValueObject(command.name);
        const type = new TypeValueObject(command.type);

        return {name, type}
    }
    
    validateValueObject(valueObject: ITrainingEquipmentDomainEntity): void {
        const {
            name,
            type,
        } = valueObject;

        if(name instanceof NameValueObject && name.hasErrors()) this.setErrors(name.getErrors());
        
        if(type instanceof TypeValueObject && type.hasErrors()) this.setErrors(type.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'AddTrainingEquipmentUseCase got some errors',
            this.getErrors(),
        );
    }

    createEntityTrainingEquipmentDomain(valueObject: ITrainingEquipmentDomainEntity): TrainingEquipmentDomainEntity {
        const {
            name,
            type
        } = valueObject;

        return new TrainingEquipmentDomainEntity({
            name: name.valueOf(),
            type: type.valueOf()
        })
    }

    executeTrainingAggregateRoot(entity: TrainingEquipmentDomainEntity): Promise<TrainingEquipmentDomainEntity | null> {
        return this.trainingAggregate.addTrainingEquipment(entity);
    }
}

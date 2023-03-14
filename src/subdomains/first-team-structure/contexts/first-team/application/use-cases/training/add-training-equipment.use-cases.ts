import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { IAddedTrainingEquipmentResponse, IAddTrainingEquipmentCommand, ITrainingDomainService, ITrainingEquipmentDomainEntity, NameValueObject, TrainingAggregate, TrainingDomainEntity, TrainingEquipmentDomainEntity, TypeValueObject } from "../../../domain";
import { AddedTrainingEquipmentEventPublisher } from "../../../domain/events/publishers/training";
import { IGetTrainingCommand } from "../../../domain/interfaces/commands/training/get-training.command";
import { IGotTrainingResponse } from "../../../domain/interfaces/responses/training/got-training.response";
import { GetTrainingUseCase } from "./get-training.use-cases";

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
        private readonly getTrainingUseCase: GetTrainingUseCase<IGetTrainingCommand, IGotTrainingResponse>
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

        let training: TrainingDomainEntity;

        this.getTrainingUseCase.execute({trainingId: command.trainingId})
        .then(iTraining => training = iTraining.data)

        return {name, type, training}
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
            type,
            training
        } = valueObject;

        return new TrainingEquipmentDomainEntity({
            training: training,
            name: name.valueOf(),
            type: type.valueOf()
        })
    }

    executeTrainingAggregateRoot(entity: TrainingEquipmentDomainEntity): Promise<TrainingEquipmentDomainEntity | null> {
        return this.trainingAggregate.addTrainingEquipment(entity);
    }
}

import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { IAddedTrainingFieldResponse, IAddTrainingFieldCommand, ITrainingDomainService, ITrainingFieldDomainEntity, NameValueObject, TownValueObject, TrainingAggregate, TrainingFieldDomainEntity, TypeValueObject } from "../../../domain";
import { AddedTrainingFieldEventPublisher } from "../../../domain/events/publishers/training";

export class AddTrainingFieldUseCases<
    Command extends IAddTrainingFieldCommand,
    Response extends IAddedTrainingFieldResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainingService: ITrainingDomainService,
        private readonly addedTrainingFieldEventPublisher: AddedTrainingFieldEventPublisher,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainingService, addedTrainingFieldEventPublisher})
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command): Promise<TrainingFieldDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        const entity = this.createEntityTrainingFeildDomain(ValueObject);

        return this.executeTrainingAggregateRoot(entity)
    }
    
    createValueObject(command: Command): ITrainingFieldDomainEntity {
        const name = new NameValueObject(command.name);
        const town = new TownValueObject(command.town);

        return {name, town}
    }
    
    validateValueObject(valueObject: ITrainingFieldDomainEntity): void {
        const {
            name,
            town
        } = valueObject;

        if(name instanceof NameValueObject && name.hasErrors()) this.setErrors(name.getErrors());
        
        if(town instanceof TownValueObject && town.hasErrors()) this.setErrors(town.getErrors());
        
        if(this.hasErrors() === true) throw new ValueObjectException(
            'AddTrainingFieldUseCase got some errors',
            this.getErrors(),
        );
    }

    createEntityTrainingFeildDomain(valueObject: ITrainingFieldDomainEntity): TrainingFieldDomainEntity {
        const {
            name,
            town
        } = valueObject;

        return new TrainingFieldDomainEntity({
            name: name.valueOf(),
            town: town.valueOf(),
        })
    }

    executeTrainingAggregateRoot(entity: TrainingFieldDomainEntity): Promise<TrainingFieldDomainEntity | null> {
        return this.trainingAggregate.addTrainingField(entity);
    }
}

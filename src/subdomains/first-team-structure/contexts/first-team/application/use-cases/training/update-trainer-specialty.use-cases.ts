import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { ITrainerDomainService, ITrainingDomainService, IUpdatedTrainerSpecialtyResponse, IUpdateTrainerSpecialtyCommand, SpecialtyValueObject, TrainerDomainEntity, TrainingAggregate, TrainingDomainEntity } from "../../../domain";
import { UpdatedTrainerSpecialtyEventPublisher } from "../../../domain/events/publishers/training";

export class UpdateTrainerSpecialtyUseCases<
    Command extends IUpdateTrainerSpecialtyCommand,
    Response extends IUpdatedTrainerSpecialtyResponse
> 
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainerService: ITrainerDomainService,
        private readonly updatedTrainerSpecialtyEventPublisher: UpdatedTrainerSpecialtyEventPublisher,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainerService, updatedTrainerSpecialtyEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeTrainingAggregateRoot({trainerId: command.trainerId, specialty: ValueObject} as Command)
    }

    createValueObject(command: Command): SpecialtyValueObject {
        if(command.specialty instanceof SpecialtyValueObject) return command.specialty
        return new SpecialtyValueObject(command.specialty);
    }

    validateValueObject(valueObject: SpecialtyValueObject) {

        if(valueObject instanceof SpecialtyValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdateTrainerSpecialtyUseCase got some errors',
            this.getErrors(),
        );
    }

    executeTrainingAggregateRoot(update: Command): Promise<TrainerDomainEntity | null> {
        return this.trainingAggregate.updateTrainerSpecialty(update);
    }
}

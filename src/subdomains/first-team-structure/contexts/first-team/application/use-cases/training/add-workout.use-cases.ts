import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { AddedWorkoutEventPublisher, GoalValueObject, IAddedWorkoutResponse, IAddWorkoutCommand, ITrainingDomainService, IWorkoutDomainEntity, NameValueObject, TrainingAggregate, TypeValueObject, WorkoutDomainEntity } from "../../../domain";

export class AddWorkoutUseCases<
    Command extends IAddWorkoutCommand,
    Response extends IAddedWorkoutResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
 {
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainingService: ITrainingDomainService,
        private readonly addedWorkoutEventPublisher: AddedWorkoutEventPublisher,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainingService, addedWorkoutEventPublisher})
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command): Promise<WorkoutDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        const entity = this.createEntityWorkoutDomain(ValueObject);

        return this.executeTrainingAggregateRoot(entity)
    }
    
    createValueObject(command: Command): IWorkoutDomainEntity {
        const name = new NameValueObject(command.name);
        const type = new TypeValueObject(command.type);
        const goal = new GoalValueObject(command.goal);

        return {name, type, goal}
    }
    
    validateValueObject(valueObject: IWorkoutDomainEntity): void {
        const {
            name,
            type,
            goal
        } = valueObject;

        if(name instanceof NameValueObject && name.hasErrors()) this.setErrors(name.getErrors());
        
        if(type instanceof TypeValueObject && type.hasErrors()) this.setErrors(type.getErrors());

        if(goal instanceof GoalValueObject && goal.hasErrors()) this.setErrors(goal.getErrors())
        
        if(this.hasErrors() === true) throw new ValueObjectException(
            'AddWorkoutUseCase got some errors',
            this.getErrors(),
        );
    }

    createEntityWorkoutDomain(valueObject: IWorkoutDomainEntity): WorkoutDomainEntity {
        const {
            name,
            type,
            goal
        } = valueObject;

        return new WorkoutDomainEntity({
            name: name.valueOf(),
            type: type.valueOf(),
            goal: goal.valueOf()
        })
    }

    executeTrainingAggregateRoot(entity: WorkoutDomainEntity): Promise<WorkoutDomainEntity | null> {
        return this.trainingAggregate.addWorkout(entity);
    }
 }

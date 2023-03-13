import { GoalValueObject, IUpdatedWorkoutGoalResponse, IUpdateWorkoutGoalCommand, IWorkoutDomainService, TrainingAggregate, UpdatedWorkoutGoalEventPublisher, WorkoutDomainEntity } from "../../../domain";
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase, ValueObjectException } from "src/libs";

export class UpdateWorkoutGoalUseCases<
    Command extends IUpdateWorkoutGoalCommand,
    Response extends IUpdatedWorkoutGoalResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly workoutService: IWorkoutDomainService,
        private readonly updatedWorkoutGoalEventPublisher: UpdatedWorkoutGoalEventPublisher,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({workoutService, updatedWorkoutGoalEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeTrainingAggregateRoot({workoutId: command.workoutId, goal: ValueObject} as Command)
    }

    createValueObject(command: Command): GoalValueObject {
        if(command.goal instanceof GoalValueObject) return command.goal
        return new GoalValueObject(command.goal);
    }

    validateValueObject(valueObject: GoalValueObject) {

        if(valueObject instanceof GoalValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdateWorkoutGoalUseCase got some errors',
            this.getErrors(),
        );
    }

    executeTrainingAggregateRoot(update: Command): Promise<WorkoutDomainEntity | null> {
        return this.trainingAggregate.updateWorkoutGoal(update);
    }
}

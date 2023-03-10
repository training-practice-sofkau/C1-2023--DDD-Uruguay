import { IGetWorkoutsCommand, IGotWorkoutsResponse, IWorkoutDomainService, TeamAggregate, WorkoutDomainEntity } from "../../../domain";
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { AggregateRootException, IUseCase } from "src/libs";
import { TrainingAggregate } from '../../../domain/aggregates/training.aggregate';

export class GetWorkoutUseCase<
    Command extends IGetWorkoutsCommand,
    Response extends IGotWorkoutsResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly workoutService: IWorkoutDomainService,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({workoutService})
    }
    async execute(command?: Command): Promise<Response> {
        return {success: true, data: this.executeTrainingAggregateRoot(command)} as Response
    }

    executeTrainingAggregateRoot(command: Command): WorkoutDomainEntity[] {
        let entitys: WorkoutDomainEntity[];
        this.trainingAggregate.getWorkouts(command.workoutId)
        .then(iEntitys => entitys = iEntitys)
        .catch(() => new AggregateRootException('Workouts entitys not founded'))

        return entitys;
    }
}
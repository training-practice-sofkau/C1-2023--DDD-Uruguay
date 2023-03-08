import { EventPublisherBase } from 'src/libs';
import { WorkoutDomainEntity } from '../../../entities/training/workout.domain-entity';
export abstract class GotWorkoutIdEventPublisher extends EventPublisherBase<WorkoutDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.got-workout-id',
            JSON.stringify({ data: this.response })
        )
    }
}
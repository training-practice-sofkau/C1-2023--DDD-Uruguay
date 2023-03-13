import { Injectable } from '@nestjs/common';
import { IUpdateWorkoutGoalCommand, IWorkoutDomainService, WorkoutDomainEntity } from 'src/subdomains/first-team-structure/contexts/first-team/domain';
import { WorkoutPostgreEntity } from '../../entities/training/workout.entity';
import { WorkoutRepository } from '../../repositories/training/workout.repository';
@Injectable()
export class WorkoutPostgreService implements IWorkoutDomainService{
    constructor(private readonly workoutRepository: WorkoutRepository) {}
    getWorkouts(id: string[]): Promise<WorkoutDomainEntity[]> {
        return this.workoutRepository.find();
    }
    updateWorkoutGoal(goal: IUpdateWorkoutGoalCommand): Promise<WorkoutDomainEntity> {
        let newEntity: WorkoutPostgreEntity;

        this.workoutRepository.findOne(goal.workoutId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.goal = goal.goal.valueOf();

        return this.workoutRepository.update(goal.workoutId, newEntity);
    }
}
import { WorkoutDomainEntity } from '../entities/training/workout.domain-entity';
import { IUpdateWorkoutGoalCommand } from "../interfaces";

export interface IWorkoutDomainService {
    getWorkouts(id: string[]): Promise<WorkoutDomainEntity[] | null>;
    updateWorkoutGoal(goal: IUpdateWorkoutGoalCommand): Promise<WorkoutDomainEntity | null>;
}
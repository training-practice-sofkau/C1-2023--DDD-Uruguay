import { GoalValueObject } from "../value-objects";
import { WorkoutDomainEntity } from '../entities/training/workout.domain-entity';
import { IUpdateWorkoutGoalCommand } from "../interfaces";

export interface IWorkoutDomainService {
    updateGoal(goal: IUpdateWorkoutGoalCommand): Promise<WorkoutDomainEntity | null>;
}
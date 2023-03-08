import { WorkoutDomainEntity } from "../../../entities";

export interface IAddedWorkoutResponse {
    success: boolean;
    data: WorkoutDomainEntity | null;
}
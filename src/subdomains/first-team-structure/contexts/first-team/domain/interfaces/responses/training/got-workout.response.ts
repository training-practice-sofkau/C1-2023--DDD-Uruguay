import { WorkoutDomainEntity } from "../../../entities";

export interface IGotWorkoutsResponse {
    success: boolean;
    data: WorkoutDomainEntity[] | null;
}
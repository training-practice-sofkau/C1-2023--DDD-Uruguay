import { CoachDomainEntity } from "../../../entities";
import { WageValueObject } from "../../../value-objects";

export interface IUpdatedCoachWageResponse {
    success: boolean;
    data: CoachDomainEntity | null;
}
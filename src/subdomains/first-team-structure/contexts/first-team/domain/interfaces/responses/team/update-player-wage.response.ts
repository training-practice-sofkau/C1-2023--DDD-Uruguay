import { PlayerDomainEntity } from "../../../entities";
import { WageValueObject } from "../../../value-objects";

export interface IUpdatedPlayerWageResponse {
    success: boolean;
    data: PlayerDomainEntity | null;
}
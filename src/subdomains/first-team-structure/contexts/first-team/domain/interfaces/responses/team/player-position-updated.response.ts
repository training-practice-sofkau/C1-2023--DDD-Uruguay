import { PlayerDomainEntity } from "../../../entities";
import { PositionValueObject } from "../../../value-objects";

export interface IUpdatedPlayerPositionResponse {
    success: boolean;
    data: PlayerDomainEntity | null;
}
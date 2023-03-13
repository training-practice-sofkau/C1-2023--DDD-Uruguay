import { RivalDomainEntity } from "../../../entities";
import { TownValueObject } from "../../../value-objects";

export interface IUpdatedRivalTownResponse {
    success: boolean;
    data: RivalDomainEntity | null;
}
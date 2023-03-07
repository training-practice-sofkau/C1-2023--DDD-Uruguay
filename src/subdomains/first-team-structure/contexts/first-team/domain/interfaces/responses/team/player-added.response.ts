import { PlayerDomainEntity } from "../../../entities";

export interface IAddedPlayerResponse {
    success: boolean;
    data: PlayerDomainEntity | null;
}
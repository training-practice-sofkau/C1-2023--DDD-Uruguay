import { PlayerDomainEntity } from "../../../entities";

export interface IGotPlayersResponse {
    success: boolean;
    data: PlayerDomainEntity[] | null;
}
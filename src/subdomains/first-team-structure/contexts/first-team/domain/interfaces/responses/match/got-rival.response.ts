import { RivalDomainEntity } from "../../../entities";

export interface IGotRivalResponse {
    success: boolean;
    data: RivalDomainEntity | null;
}
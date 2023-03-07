import { RivalDomainEntity } from "../../../entities";

export interface IAddedRivalResponse {
    success: boolean;
    data: RivalDomainEntity | null;
}
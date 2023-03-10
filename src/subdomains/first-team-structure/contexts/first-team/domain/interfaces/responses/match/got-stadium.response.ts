import { StadiumDomainEntity } from "../../../entities";

export interface IGotStadiumResponse {
    success: boolean;
    data: StadiumDomainEntity | null;
}
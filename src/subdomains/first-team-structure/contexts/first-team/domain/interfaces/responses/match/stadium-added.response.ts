import { StadiumDomainEntity } from "../../../entities";

export interface IAddedStadiumResponse {
    success: boolean;
    data: StadiumDomainEntity | null;
}
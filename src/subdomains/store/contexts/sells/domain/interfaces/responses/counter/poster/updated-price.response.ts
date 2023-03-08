import { PosterDomainEntity } from "../../../../entities";

export interface IPosterUpdatedPriceResponse {
    success: boolean;
    data: PosterDomainEntity | null;
}
import { PosterDomainEntity } from "../../../entities";

export interface ICounterPosterCreatedResponse {
    success: boolean;
    data: PosterDomainEntity | null;
}
import { PosterDomainEntity } from "../../../../entities";

export interface IPosterUpdatedImageResponse {
    success: boolean;
    data: PosterDomainEntity | null;
}
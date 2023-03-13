import { PosterDomainEntity } from "../../../../entities";

export interface IPosterUpdatedTypeResponse {
    success: boolean;
    data: PosterDomainEntity | null;
}
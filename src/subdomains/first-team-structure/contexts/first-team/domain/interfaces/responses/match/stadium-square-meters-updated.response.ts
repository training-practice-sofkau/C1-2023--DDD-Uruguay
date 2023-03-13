import { StadiumDomainEntity } from "../../../entities";
import { SquareMetersValueObject } from "../../../value-objects";

export interface IUpdatedStadiumSquareMetersResponse {
    success: boolean;
    data: StadiumDomainEntity | null;
}
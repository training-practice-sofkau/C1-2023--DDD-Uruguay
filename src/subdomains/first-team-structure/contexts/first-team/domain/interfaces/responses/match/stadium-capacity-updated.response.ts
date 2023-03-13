import { StadiumDomainEntity } from "../../../entities";
import { CapacityValueObject } from "../../../value-objects";

export interface IUpdatedStadiumCapacityResponse {
    success: boolean;
    data: StadiumDomainEntity | null;
}
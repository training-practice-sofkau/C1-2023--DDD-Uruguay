import { GuestDomainEntity } from "../../../entities";

export interface IGuestAddedResponse {
    success: boolean;
    data: GuestDomainEntity | null;
}
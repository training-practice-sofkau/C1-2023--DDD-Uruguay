import { GuestDomainEntity } from "../../../entities";

export class IGuestObtainedResponse {
    succes: boolean;
    data: GuestDomainEntity | null 
}

import { MembershipDomainEntity } from "../../../entities/membership/membership.domain-entity";

export interface IClienteCreadoResponse {
    success: boolean;
    data: MembershipDomainEntity | null;
}
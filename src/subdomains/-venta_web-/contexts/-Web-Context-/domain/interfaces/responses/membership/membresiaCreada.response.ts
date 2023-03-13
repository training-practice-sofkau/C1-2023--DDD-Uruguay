import { MembershipDomainEntity } from "../../../entities/membership/membership.domain-entity";

export interface IMembresiaCreadaResponse {
    success: boolean;
    data: MembershipDomainEntity | null;
}
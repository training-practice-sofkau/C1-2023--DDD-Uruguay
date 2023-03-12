import { ClienteDomainEntity } from "../../../entities";
import { PlanDomainEntity } from "../../../entities/membership/plan.domain-entity";

export interface IClienteCreadoResponse {
    success: boolean;
    data: ClienteDomainEntity | null;
}
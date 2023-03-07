import { PlanDomainEntity } from "../../../entities/membership/plan.domain-entity";

export interface IClienteCreadoResponse {
    success: boolean;
    data: PlanDomainEntity | null;
}
import { ConsumptionDomainEntity } from "../../../entities";

export interface IConsumptionAddedResponse {
    success: boolean;
    data: ConsumptionDomainEntity | null;
}
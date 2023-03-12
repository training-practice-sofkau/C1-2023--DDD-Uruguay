import { ConsumptionDomainEntity } from "../../../entities";

export class IConsumptionObtainedResponse {
    succes: boolean;
    data: ConsumptionDomainEntity | null 
}

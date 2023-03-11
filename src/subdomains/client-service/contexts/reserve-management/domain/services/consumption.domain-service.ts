import { ConsumptionDomainEntity } from "../entities";
import { IUpdateExtra, IUpdateMiniBar } from "../interfaces";

export interface IConsumptionDomainService {
    updateExtra(data: IUpdateExtra): Promise<ConsumptionDomainEntity>;
    updateMiniBar(data: IUpdateMiniBar): Promise<ConsumptionDomainEntity>;
}
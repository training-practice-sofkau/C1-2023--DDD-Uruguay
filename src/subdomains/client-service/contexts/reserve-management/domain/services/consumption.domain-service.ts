import { ConsumptionDomainEntity } from "../entities";
import { IUpdateExtra, IUpdateMiniBar } from "../interfaces";

export interface IConsumptionDomainService<T extends ConsumptionDomainEntity = ConsumptionDomainEntity> {
    updateExtra(data: IUpdateExtra): Promise<ConsumptionDomainEntity>;
    updateMiniBar(data: IUpdateMiniBar): Promise<ConsumptionDomainEntity>;
}
import { IUpdateExtra, IUpdateMiniBar } from "../interfaces";

export interface IConsumptionDomainService {
    updateExtra(data: IUpdateExtra): Promise<number>;
    updateMiniBar(data: IUpdateMiniBar): Promise<number>;
}
export interface IConsumptionDomainService {
    updateExtra(consumptionId: string, newExtra: number): Promise<number>;
    updateMiniBar(consumptionId: string, newMiniBar: number): Promise<number>;
}
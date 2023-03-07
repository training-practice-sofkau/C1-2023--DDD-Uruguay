import { ConsumptionDomainEntity, InvoiceDomainEntity } from '../entities/';

export interface ICheckOutDomainService<CheckOutDomainEntity> {

    createCheckOut(checkOut: CheckOutDomainEntity): Promise<CheckOutDomainEntity>

    addConsumption(consumption: ConsumptionDomainEntity): Promise<ConsumptionDomainEntity>

    addInvoice(invoice: InvoiceDomainEntity): Promise<InvoiceDomainEntity>

    updateInvoiceCost(checkOutId: string, invoiceId: string, newCost: number): Promise<number>

    updateConsumptionExtra(checkOutId: string, consumptionId: string, newExtra: number): Promise<number>
    
    updateConsumptionMiniBar(checkOutId: string, consumptionId: string, newMiniBar: number): Promise<number>
}
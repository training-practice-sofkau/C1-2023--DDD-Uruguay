import { ConsumptionDomainEntity, InvoiceDomainEntity } from '../entities/';
import {
    IAddConsumption,
    IAddInvoice,
    ICreateCheckOut,
    IUpdateConsumptionExtra,
    IUpdateConsumptionMiniBar,
    IUpdateInvoiceCost
} from '../interfaces';

export interface ICheckOutDomainService<CheckOutDomainEntity> {

    createCheckOut(checkOut: ICreateCheckOut): Promise<CheckOutDomainEntity>

    addConsumption(consumption: IAddConsumption): Promise<ConsumptionDomainEntity>

    addInvoice(invoice: IAddInvoice): Promise<InvoiceDomainEntity>

    updateInvoiceCost(data: IUpdateInvoiceCost): Promise<number>

    updateConsumptionExtra(data: IUpdateConsumptionExtra): Promise<number>

    updateConsumptionMiniBar(data: IUpdateConsumptionMiniBar): Promise<number>
}
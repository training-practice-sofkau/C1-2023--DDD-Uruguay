import { CheckOutDomainEntity, ConsumptionDomainEntity, InvoiceDomainEntity } from '../entities/';
import {
    IAddConsumption,
    IAddInvoice,
    ICreateCheckOut,
    IUpdateConsumptionExtra,
    IUpdateConsumptionMiniBar,
    IUpdateInvoiceCost
} from '../interfaces';

export interface ICheckOutDomainService {

    createCheckOut(checkOut: ICreateCheckOut): Promise<CheckOutDomainEntity>

    addConsumption(consumption: IAddConsumption): Promise<ConsumptionDomainEntity>

    addInvoice(invoice: IAddInvoice): Promise<InvoiceDomainEntity>

    updateInvoiceCost(data: IUpdateInvoiceCost): Promise<number>

    updateConsumptionExtra(data: IUpdateConsumptionExtra): Promise<number>

    updateConsumptionMiniBar(data: IUpdateConsumptionMiniBar): Promise<number>

    getConsumption(data: string): Promise<ConsumptionDomainEntity>;

    getInvoice(data: string): Promise<InvoiceDomainEntity>;
}
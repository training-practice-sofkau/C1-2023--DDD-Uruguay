import { CheckOutDomainEntity, ConsumptionDomainEntity, InvoiceDomainEntity } from '../entities/';
import {
    IAddConsumption,
    IAddInvoice,
} from '../interfaces';

export interface ICheckOutDomainService<T extends CheckOutDomainEntity = CheckOutDomainEntity> {

    createCheckOut(checkOut: T): Promise<T>

    addConsumption(consumption: IAddConsumption): Promise<ConsumptionDomainEntity>

    addInvoice(invoice: IAddInvoice): Promise<InvoiceDomainEntity>

    getConsumption(data: string): Promise<ConsumptionDomainEntity>;

    getInvoice(data: string): Promise<InvoiceDomainEntity>;
}
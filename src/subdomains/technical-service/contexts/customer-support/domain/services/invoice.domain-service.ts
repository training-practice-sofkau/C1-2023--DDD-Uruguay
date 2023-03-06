import { InvoiceDomainEntityBase } from '../entities/invoice.domain-entity';

export interface IInvoiceDomainService <T extends InvoiceDomainEntityBase = InvoiceDomainEntityBase> {


    createInvoice( invoice: T) : Promise < T | null>;

    CalculateServiceCharge( ticketID: T ) : Promise < T | null >;

    //TODO: revisar y terminar Invoice Service
    
}
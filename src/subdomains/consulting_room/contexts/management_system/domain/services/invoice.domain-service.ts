import { ClientDomainEntitybase, InvoiceDomainEntitybase } from '../entities';

export interface IInvoiceDomainService<
    T extends InvoiceDomainEntitybase = InvoiceDomainEntitybase,
> {
    getInvoice(invoiceId: string): Promise<T | null>;
    addInvoice(invoice: T): Promise<T | null>;
    updateAmount(invoiceId: string, amount: number): Promise<T>;
}
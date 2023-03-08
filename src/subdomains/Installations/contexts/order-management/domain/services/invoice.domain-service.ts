import { InvoiceDomainEntityBase } from "../entities"
import { CompanyDomainEntityBase, FeeDomainEntityBase } from "../entities/invoice";

export interface IInvoiceDomainService<T extends InvoiceDomainEntityBase = InvoiceDomainEntityBase> {

    createInvoice(invoice: T): Promise<T>;
    getInvoice(invoiceId: string): Promise<InvoiceDomainEntityBase>;
    addCompany(invoiceId: string): Promise<CompanyDomainEntityBase>;
    addFee(invoiceId: string): Promise<FeeDomainEntityBase>;
    updateCompany(invoiceId: string, newCompany: CompanyDomainEntityBase): Promise<CompanyDomainEntityBase>;
    updateFee(invoiceId: string, newFee: FeeDomainEntityBase): Promise<FeeDomainEntityBase>;
    changeStatus(invoiceId: string): Promise<boolean>;

}
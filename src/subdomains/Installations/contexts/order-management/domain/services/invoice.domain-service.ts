import { InvoiceDomainEntityBase } from "../entities"
import { CompanyDomainEntityBase, FeeDomainEntityBase } from "../entities/invoice";
import { CompanyNameValueObject, CompanyBankAccountValueObject, FeeChargeValueObject, FeeTaxValueObject } from "../value-objects/invoice";

export interface IInvoiceDomainService<T extends InvoiceDomainEntityBase = InvoiceDomainEntityBase> {

    createInvoice(invoice: T): Promise<T>;
    getInvoice(invoiceId: string): Promise<InvoiceDomainEntityBase>;
    addCompany(company: CompanyDomainEntityBase): Promise<CompanyDomainEntityBase>;
    addFee(fee: FeeDomainEntityBase): Promise<FeeDomainEntityBase>;
    updateCompanyName(domain: InvoiceDomainEntityBase, newCompanyName: CompanyNameValueObject): Promise<CompanyDomainEntityBase>
    updateCompanyBankAccount(domain: InvoiceDomainEntityBase, newCompanyBankAccount: CompanyBankAccountValueObject): Promise<CompanyDomainEntityBase>
    updateFeeCharge(domain: InvoiceDomainEntityBase, newFeeCharge: FeeChargeValueObject): Promise<FeeDomainEntityBase>
    updateFeeTax(domain: InvoiceDomainEntityBase, newFeeTax: FeeTaxValueObject): Promise<FeeDomainEntityBase>
    changeStatus(domain: InvoiceDomainEntityBase): Promise<boolean>;

}
import { AggregateRootException } from '../../../../../../libs/sofka';
import { InvoiceDomainEntityBase } from '../entities';
import { CompanyDomainEntityBase, FeeDomainEntityBase } from '../entities/invoice'
import { RegisteredInvoiceEventPublisherBase, GetInvoiceEventPublisherBase } from '../events/publishers';
import { InvoiceCompanyAddedEventPublisherBase, InvoiceCompanyUpdatedEventPublisherBase, InvoiceFeeAddedEventPublisherBase, InvoiceFeeUpdatedEventPublisherBase, InvoiceStatusChangedEventPublisherBase } from '../events/publishers/invoice';
import { IInvoiceDomainService } from '../services';
import { CompanyBankAccountValueObject, CompanyNameValueObject, FeeChargeValueObject, FeeTaxValueObject } from '../value-objects';
import { CreateInvoice } from './helpers';

export class InvoiceAggregate implements IInvoiceDomainService {

    private readonly invoiceService?: IInvoiceDomainService;
    private readonly registeredInvoiceEventPublisherBase?: RegisteredInvoiceEventPublisherBase;
    private readonly getInvoiceEventPublisherBase?: GetInvoiceEventPublisherBase;
    private readonly invoiceCompanyAddedEventPublisherBase?: InvoiceCompanyAddedEventPublisherBase;
    private readonly invoiceCompanyUpdatedEventPublisherBase?: InvoiceCompanyUpdatedEventPublisherBase;
    private readonly invoiceFeeAddedEventPublisherBase?: InvoiceFeeAddedEventPublisherBase;
    private readonly invoiceFeeUpdatedEventPublisherBase?: InvoiceFeeUpdatedEventPublisherBase;
    private readonly invoiceStatusChangedEventPublisherBase?: InvoiceStatusChangedEventPublisherBase;

    constructor(
        {
            invoiceService,
            getInvoiceEventPublisherBase,
            registeredInvoiceEventPublisherBase,
            invoiceCompanyAddedEventPublisherBase,
            invoiceCompanyUpdatedEventPublisherBase,
            invoiceFeeAddedEventPublisherBase,
            invoiceFeeUpdatedEventPublisherBase,
            invoiceStatusChangedEventPublisherBase

        }: {
            invoiceService?: IInvoiceDomainService,
            getInvoiceEventPublisherBase?: GetInvoiceEventPublisherBase,
            registeredInvoiceEventPublisherBase?: RegisteredInvoiceEventPublisherBase,
            invoiceCompanyAddedEventPublisherBase?: InvoiceCompanyAddedEventPublisherBase,
            invoiceCompanyUpdatedEventPublisherBase?: InvoiceCompanyUpdatedEventPublisherBase,
            invoiceFeeAddedEventPublisherBase?: InvoiceFeeAddedEventPublisherBase,
            invoiceFeeUpdatedEventPublisherBase?: InvoiceFeeUpdatedEventPublisherBase,
            invoiceStatusChangedEventPublisherBase?: InvoiceStatusChangedEventPublisherBase
        }
    ) {
        this.invoiceService = invoiceService;
        this.registeredInvoiceEventPublisherBase = registeredInvoiceEventPublisherBase;
        this.getInvoiceEventPublisherBase = getInvoiceEventPublisherBase;
        this.invoiceCompanyAddedEventPublisherBase = invoiceCompanyAddedEventPublisherBase;
        this.invoiceCompanyUpdatedEventPublisherBase = invoiceCompanyUpdatedEventPublisherBase;
        this.invoiceFeeAddedEventPublisherBase = invoiceFeeAddedEventPublisherBase;
        this.invoiceFeeUpdatedEventPublisherBase = invoiceFeeUpdatedEventPublisherBase;
        this.invoiceStatusChangedEventPublisherBase = invoiceStatusChangedEventPublisherBase;
    }

    async createInvoice(invoice: InvoiceDomainEntityBase): Promise<InvoiceDomainEntityBase> {
        if (!this.invoiceService)
            throw new AggregateRootException('InvoiceService is not defined')
        if (!this.registeredInvoiceEventPublisherBase)
            throw new AggregateRootException('RegisteredInvoiceEventPublisherBase is not defined')

        return CreateInvoice(invoice, this.invoiceService, this.registeredInvoiceEventPublisherBase)
    }

    async getInvoice(): Promise<InvoiceDomainEntityBase> {
        if (!this.getInvoiceEventPublisherBase)
            throw new AggregateRootException('GetInvoiceEventPublisherBase is not defined')

        return this.registeredInvoiceEventPublisherBase.response[0];
    }

    async addCompany(company: CompanyDomainEntityBase): Promise<CompanyDomainEntityBase> {
        if (!this.invoiceCompanyAddedEventPublisherBase)
            throw new AggregateRootException('InvoiceCompanyAddedEventPublisherBase is not defined')

        return this.invoiceCompanyAddedEventPublisherBase.response[0];
    }
    
    async addFee(fee: FeeDomainEntityBase): Promise<FeeDomainEntityBase> {
        if (!this.invoiceFeeAddedEventPublisherBase)
            throw new AggregateRootException('InvoiceFeeAddedEventPublisherBase is not defined')

        return this.invoiceFeeAddedEventPublisherBase.response[0];
    }


    async updateCompanyName(domain: InvoiceDomainEntityBase, newCompanyName: CompanyNameValueObject): Promise<CompanyDomainEntityBase> {
        if (!this.invoiceCompanyUpdatedEventPublisherBase)
            throw new AggregateRootException('InvoiceCompanyNameUpdatedEventPublisherBase is not defined')

        return this.invoiceCompanyUpdatedEventPublisherBase.response[0];
    }

    async updateCompanyBankAccount(domain: InvoiceDomainEntityBase, newCompanyBankAccount: CompanyBankAccountValueObject): Promise<CompanyDomainEntityBase> {
        if (!this.invoiceCompanyUpdatedEventPublisherBase)
            throw new AggregateRootException('InvoiceCompanyBankAccountUpdatedEventPublisherBase is not defined')

        return this.invoiceCompanyUpdatedEventPublisherBase.response[0];
    }

    async updateFeeCharge(domain: InvoiceDomainEntityBase, newFee: FeeChargeValueObject): Promise<FeeDomainEntityBase> {
        if (!this.invoiceFeeUpdatedEventPublisherBase)
            throw new AggregateRootException('InvoiceFeeChargeUpdatedEventPublisherBase is not defined')

        return this.invoiceFeeUpdatedEventPublisherBase.response[0];
    }

    async updateFeeTax(domain: InvoiceDomainEntityBase, newFee: FeeTaxValueObject): Promise<FeeDomainEntityBase> {
        if (!this.invoiceFeeUpdatedEventPublisherBase)
            throw new AggregateRootException('InvoiceFeeTaxUpdatedEventPublisherBase is not defined')

        return this.invoiceFeeUpdatedEventPublisherBase.response[0];
    }
    
    async changeStatus(domain: InvoiceDomainEntityBase): Promise<boolean> {
        if (!this.invoiceStatusChangedEventPublisherBase)
            throw new AggregateRootException('InvoiceStatusChangedEventPublisherBase is not defined')

        return this.invoiceStatusChangedEventPublisherBase.response[0];
    }

}
import { AggregateRootException } from '../../../../../../libs/sofka';
import { InvoiceDomainEntityBase } from '../entities';
import { CompanyDomainEntityBase, FeeDomainEntityBase } from '../entities/invoice'
import { RegisteredInvoiceEventPublisherBase } from '../events';
import { IInvoiceDomainService } from '../services';
import { CreateInvoice } from './helpers';

export class InvoiceAggregate implements IInvoiceDomainService {

    private readonly invoiceService?: IInvoiceDomainService;
    private readonly registeredInvoiceEventPublisherBase?: RegisteredInvoiceEventPublisherBase;

    constructor(
        {
            invoiceService,
            registeredInvoiceEventPublisherBase
        }: {
            invoiceService?: IInvoiceDomainService,
            registeredInvoiceEventPublisherBase?: RegisteredInvoiceEventPublisherBase
        }
    ) {
        this.invoiceService = invoiceService;
        this.registeredInvoiceEventPublisherBase = registeredInvoiceEventPublisherBase;
    }

    async createInvoice(invoice: InvoiceDomainEntityBase): Promise<InvoiceDomainEntityBase> {
        if (!this.invoiceService)
            throw new AggregateRootException('InvoiceService is not defined')
        if (!this.registeredInvoiceEventPublisherBase)
            throw new AggregateRootException('RegisteredInvoiceEventPublisherBase is not defined')

        return CreateInvoice(invoice, this.invoiceService, this.registeredInvoiceEventPublisherBase)
    }

    async getInvoice(invoiceId: string): Promise<InvoiceDomainEntityBase> {
        throw new Error('Method not implemented.');
    }

    async updateCompany(invoiceId: string, newCompany: CompanyDomainEntityBase): Promise<CompanyDomainEntityBase> {
        throw new Error('Method not implemented.');
    }

    async updateFee(invoiceId: string, newFee: FeeDomainEntityBase): Promise<FeeDomainEntityBase> {
        throw new Error('Method not implemented.');
    }
    
    changeStatus(invoiceId: string): Promise<InvoiceDomainEntityBase> {
        throw new Error('Method not implemented.');
    }

}
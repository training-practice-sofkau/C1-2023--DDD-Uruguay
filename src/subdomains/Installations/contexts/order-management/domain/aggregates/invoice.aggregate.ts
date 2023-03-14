import { AggregateRootException } from '../../../../../../libs/sofka';
import { InvoiceDomainEntityBase } from '../entities';
import {
  CompanyDomainEntityBase,
  FeeDomainEntityBase,
} from '../entities/invoice';
import {
  GetInvoiceEventPublisherBase,
  CreatedInvoiceEventPublisherBase,
} from '../events/publishers';
import {
  InvoiceCompanyCreatedEventPublisherBase,
  InvoiceCompanyUpdatedEventPublisherBase,
  InvoiceFeeCreatedEventPublisherBase,
  InvoiceFeeUpdatedEventPublisherBase,
  InvoiceStatusChangedEventPublisherBase,
} from '../events/publishers/invoice';
import { IInvoiceDomainService } from '../services';
import {
  CompanyBankAccountValueObject,
  CompanyNameValueObject,
  FeeChargeValueObject,
  FeeTaxValueObject,
} from '../value-objects';
import { CreateInvoice } from './helpers';

export class InvoiceAggregate implements IInvoiceDomainService {
  private readonly invoiceService?: IInvoiceDomainService;
  private readonly createdInvoiceEventPublisherBase?: CreatedInvoiceEventPublisherBase;
  private readonly getInvoiceEventPublisherBase?: GetInvoiceEventPublisherBase;
  private readonly invoiceCompanyCreatedEventPublisherBase?: InvoiceCompanyCreatedEventPublisherBase;
  private readonly invoiceCompanyUpdatedEventPublisherBase?: InvoiceCompanyUpdatedEventPublisherBase;
  private readonly invoiceFeeCreatedEventPublisherBase?: InvoiceFeeCreatedEventPublisherBase;
  private readonly invoiceFeeUpdatedEventPublisherBase?: InvoiceFeeUpdatedEventPublisherBase;
  private readonly invoiceStatusChangedEventPublisherBase?: InvoiceStatusChangedEventPublisherBase;

  constructor({
    invoiceService,
    getInvoiceEventPublisherBase,
    createdInvoiceEventPublisherBase,
    invoiceCompanyCreatedEventPublisherBase,
    invoiceCompanyUpdatedEventPublisherBase,
    invoiceFeeCreatedEventPublisherBase,
    invoiceFeeUpdatedEventPublisherBase,
    invoiceStatusChangedEventPublisherBase,
  }: {
    invoiceService?: IInvoiceDomainService;
    getInvoiceEventPublisherBase?: GetInvoiceEventPublisherBase;
    createdInvoiceEventPublisherBase?: CreatedInvoiceEventPublisherBase;
    invoiceCompanyCreatedEventPublisherBase?: InvoiceCompanyCreatedEventPublisherBase;
    invoiceCompanyUpdatedEventPublisherBase?: InvoiceCompanyUpdatedEventPublisherBase;
    invoiceFeeCreatedEventPublisherBase?: InvoiceFeeCreatedEventPublisherBase;
    invoiceFeeUpdatedEventPublisherBase?: InvoiceFeeUpdatedEventPublisherBase;
    invoiceStatusChangedEventPublisherBase?: InvoiceStatusChangedEventPublisherBase;
  }) {
    this.invoiceService = invoiceService;
    this.createdInvoiceEventPublisherBase =
      createdInvoiceEventPublisherBase;
    this.getInvoiceEventPublisherBase = getInvoiceEventPublisherBase;
    this.invoiceCompanyCreatedEventPublisherBase =
      invoiceCompanyCreatedEventPublisherBase;
    this.invoiceCompanyUpdatedEventPublisherBase =
      invoiceCompanyUpdatedEventPublisherBase;
    this.invoiceFeeCreatedEventPublisherBase = invoiceFeeCreatedEventPublisherBase;
    this.invoiceFeeUpdatedEventPublisherBase =
      invoiceFeeUpdatedEventPublisherBase;
    this.invoiceStatusChangedEventPublisherBase =
      invoiceStatusChangedEventPublisherBase;
  }

  async createInvoice(
    invoice: InvoiceDomainEntityBase
  ): Promise<InvoiceDomainEntityBase> {
    if (!this.invoiceService)
      throw new AggregateRootException("InvoiceService is not defined");
    if (!this.createdInvoiceEventPublisherBase)
      throw new AggregateRootException(
        "CreatedInvoiceEventPublisherBase is not defined"
      );

    return CreateInvoice(
      invoice,
      this.invoiceService,
      this.createdInvoiceEventPublisherBase
    );
  }

  async getInvoice(invoiceId: string): Promise<InvoiceDomainEntityBase> {
    if (!this.getInvoiceEventPublisherBase)
      throw new AggregateRootException(
        "GetInvoiceEventPublisherBase is not defined"
      );

    return this.createdInvoiceEventPublisherBase.response[0];
  }

  async deleteInvoice(invoiceId: string): Promise<boolean> {
    if (!this.getInvoiceEventPublisherBase)
      throw new AggregateRootException(
        "GetInvoiceEventPublisherBase is not defined"
      );

    return this.createdInvoiceEventPublisherBase.response[0];
  }

  async createCompany(
    company: CompanyDomainEntityBase
  ): Promise<CompanyDomainEntityBase> {
    if (!this.invoiceCompanyCreatedEventPublisherBase)
      throw new AggregateRootException(
        "InvoiceCompanyCreatedEventPublisherBase is not defined"
      );

    return this.invoiceCompanyCreatedEventPublisherBase.response[0];
  }

  async createFee(fee: FeeDomainEntityBase): Promise<FeeDomainEntityBase> {
    if (!this.invoiceFeeCreatedEventPublisherBase)
      throw new AggregateRootException(
        "InvoiceFeeCreatedEventPublisherBase is not defined"
      );

    return this.invoiceFeeCreatedEventPublisherBase.response[0];
  }

  async updateCompanyName(
    domain: InvoiceDomainEntityBase,
    newCompanyName: CompanyNameValueObject
  ): Promise<CompanyDomainEntityBase> {
    if (!this.invoiceCompanyUpdatedEventPublisherBase)
      throw new AggregateRootException(
        "InvoiceCompanyNameUpdatedEventPublisherBase is not defined"
      );

    return this.invoiceCompanyUpdatedEventPublisherBase.response[0];
  }

  async updateCompanyBankAccount(
    domain: InvoiceDomainEntityBase,
    newCompanyBankAccount: CompanyBankAccountValueObject
  ): Promise<CompanyDomainEntityBase> {
    if (!this.invoiceCompanyUpdatedEventPublisherBase)
      throw new AggregateRootException(
        "InvoiceCompanyBankAccountUpdatedEventPublisherBase is not defined"
      );

    return this.invoiceCompanyUpdatedEventPublisherBase.response[0];
  }

  async updateFeeCharge(
    domain: InvoiceDomainEntityBase,
    newFee: FeeChargeValueObject
  ): Promise<FeeDomainEntityBase> {
    if (!this.invoiceFeeUpdatedEventPublisherBase)
      throw new AggregateRootException(
        "InvoiceFeeChargeUpdatedEventPublisherBase is not defined"
      );

    return this.invoiceFeeUpdatedEventPublisherBase.response[0];
  }

  async updateFeeTax(
    domain: InvoiceDomainEntityBase,
    newFee: FeeTaxValueObject
  ): Promise<FeeDomainEntityBase> {
    if (!this.invoiceFeeUpdatedEventPublisherBase)
      throw new AggregateRootException(
        "InvoiceFeeTaxUpdatedEventPublisherBase is not defined"
      );

    return this.invoiceFeeUpdatedEventPublisherBase.response[0];
  }

  async changeStatus(invoiceId: string): Promise<boolean> {
    if (!this.invoiceStatusChangedEventPublisherBase)
      throw new AggregateRootException(
        "InvoiceStatusChangedEventPublisherBase is not defined"
      );

    return this.invoiceStatusChangedEventPublisherBase.response[0];
  }
}

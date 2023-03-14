import { AggregateRootException } from '../../../../../../libs/sofka';
import { InvoiceDomainEntityBase } from '../entities';
import {
  CompanyDomainEntityBase,
  FeeDomainEntityBase,
} from '../entities/invoice';
import {
  CreatedInvoiceEventPublisherBase,
  GetInvoiceEventPublisherBase,
} from '../events/publishers';
import {
  InvoiceCompanyCreatedEventPublisherBase,
  InvoiceCompanyUpdatedEventPublisherBase,
  InvoiceFeeCreatedEventPublisherBase,
  InvoiceFeeUpdatedEventPublisherBase,
  InvoiceStatusChangedEventPublisherBase,
} from '../events/publishers/invoice';
import {
  ICompanyDomainService,
  IFeeDomainService,
  IInvoiceDomainService,
} from '../services';
import { CreateInvoice } from './helpers';

export class InvoiceAggregate implements IInvoiceDomainService, ICompanyDomainService, IFeeDomainService {
  private readonly invoiceService?: IInvoiceDomainService;
  private readonly companyService?: ICompanyDomainService;
  private readonly feeService?: IFeeDomainService;
  private readonly createdInvoiceEventPublisherBase?: CreatedInvoiceEventPublisherBase;
  private readonly getInvoiceEventPublisherBase?: GetInvoiceEventPublisherBase;
  private readonly invoiceCompanyCreatedEventPublisherBase?: InvoiceCompanyCreatedEventPublisherBase;
  private readonly invoiceCompanyUpdatedEventPublisherBase?: InvoiceCompanyUpdatedEventPublisherBase;
  private readonly invoiceFeeCreatedEventPublisherBase?: InvoiceFeeCreatedEventPublisherBase;
  private readonly invoiceFeeUpdatedEventPublisherBase?: InvoiceFeeUpdatedEventPublisherBase;
  private readonly invoiceStatusChangedEventPublisherBase?: InvoiceStatusChangedEventPublisherBase;

  constructor({
    invoiceService,
    companyService,
    feeService,
    getInvoiceEventPublisherBase,
    createdInvoiceEventPublisherBase,
    invoiceCompanyCreatedEventPublisherBase,
    invoiceCompanyUpdatedEventPublisherBase,
    invoiceFeeCreatedEventPublisherBase,
    invoiceFeeUpdatedEventPublisherBase,
    invoiceStatusChangedEventPublisherBase,
  }: {
    invoiceService?: IInvoiceDomainService;
    companyService?: ICompanyDomainService;
    feeService?: IFeeDomainService;
    getInvoiceEventPublisherBase?: GetInvoiceEventPublisherBase;
    createdInvoiceEventPublisherBase?: CreatedInvoiceEventPublisherBase;
    invoiceCompanyCreatedEventPublisherBase?: InvoiceCompanyCreatedEventPublisherBase;
    invoiceCompanyUpdatedEventPublisherBase?: InvoiceCompanyUpdatedEventPublisherBase;
    invoiceFeeCreatedEventPublisherBase?: InvoiceFeeCreatedEventPublisherBase;
    invoiceFeeUpdatedEventPublisherBase?: InvoiceFeeUpdatedEventPublisherBase;
    invoiceStatusChangedEventPublisherBase?: InvoiceStatusChangedEventPublisherBase;
  }) {
    this.invoiceService = invoiceService;
    this.companyService = companyService;
    this.feeService = feeService;
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

  async getCompany(companyId: string): Promise<CompanyDomainEntityBase> {
    if (!this.getInvoiceEventPublisherBase)
      throw new AggregateRootException(
        "GetInvoiceEventPublisherBase is not defined"
      );

    return this.createdInvoiceEventPublisherBase.response[0];
  }

  async deleteCompany(companyId: string): Promise<boolean> {
    if (!this.getInvoiceEventPublisherBase)
      throw new AggregateRootException(
        "GetInvoiceEventPublisherBase is not defined"
      );

    return this.createdInvoiceEventPublisherBase.response[0];
  }

  async createFee(fee: FeeDomainEntityBase): Promise<FeeDomainEntityBase> {
    if (!this.invoiceFeeCreatedEventPublisherBase)
      throw new AggregateRootException(
        "InvoiceFeeCreatedEventPublisherBase is not defined"
      );

    return this.invoiceFeeCreatedEventPublisherBase.response[0];
  }

  async getFee(feeId: string): Promise<FeeDomainEntityBase> {
    if (!this.getInvoiceEventPublisherBase)
      throw new AggregateRootException(
        "GetInvoiceEventPublisherBase is not defined"
      );

    return this.createdInvoiceEventPublisherBase.response[0];
  }

  async deleteFee(feeId: string): Promise<boolean> {
    if (!this.getInvoiceEventPublisherBase)
      throw new AggregateRootException(
        "GetInvoiceEventPublisherBase is not defined"
      );

    return this.createdInvoiceEventPublisherBase.response[0];
  }

  async updateCompanyName(
    companyId: string,
    newCompanyName: CompanyDomainEntityBase
  ): Promise<CompanyDomainEntityBase> {
    if (!this.invoiceCompanyUpdatedEventPublisherBase)
      throw new AggregateRootException(
        "InvoiceCompanyNameUpdatedEventPublisherBase is not defined"
      );

    return this.invoiceCompanyUpdatedEventPublisherBase.response[0];
  }

  async updateCompanyBankAccount(
    companyId: string,
    newCompanyBankAccount: CompanyDomainEntityBase
  ): Promise<CompanyDomainEntityBase> {
    if (!this.invoiceCompanyUpdatedEventPublisherBase)
      throw new AggregateRootException(
        "InvoiceCompanyBankAccountUpdatedEventPublisherBase is not defined"
      );

    return this.invoiceCompanyUpdatedEventPublisherBase.response[0];
  }

  async updateFeeCharge(
    feeId: string,
    newFee: FeeDomainEntityBase
  ): Promise<FeeDomainEntityBase> {
    if (!this.invoiceFeeUpdatedEventPublisherBase)
      throw new AggregateRootException(
        "InvoiceFeeChargeUpdatedEventPublisherBase is not defined"
      );

    return this.invoiceFeeUpdatedEventPublisherBase.response[0];
  }

  async updateFeeTax(
    feeId: string,
    newFee: FeeDomainEntityBase
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

//TODO
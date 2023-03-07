import { AggregateRootException } from '../../../../../../libs/sofka/exceptions';

import { UUIDValueObject } from '../value-objects/common';

import {
    CustomerEmailChangedEventPublisherBase,
    CustomerPhoneChangedEventPublisherBase
} from '../events/publishers/customer/';

import { 
    IChangeCustomerPhoneCommand, 
    IChangeCustomerEmailCommand 
} from '../interfaces/commands/invoice/customer';

import {
    IInvoiceDomainService,
    ICustomerDomainService,
    IWarrantyDomainService
} from '../services';

import {
    ICreateInvoiceCommand,
    IAddWarrantyCommand,
    ICreateCustomerCommand,
    INotifyCustomerCommand
} from '../interfaces/commands/invoice';

import {
    CustomerCreatedEventPublisherBase,
    InvoiceCreatedEventPublisherBase,
    ServiceChargeCalculatedEventPublisherBase,
    CustomerNotifiedEventPublisherBase,
    InvoiceMarkedAsPaidEventPublisherBase,
    WarrantyAddedEventPublisherBase,
} from '../events/publishers/invoice';


import {
    CreateInvoice,
    CreateCustomer,
    AddWarranty,
    CalculateServiceCharge,
    NotifyCustomer,
    MarkInvoiceAsPaid
} from './helpers/Invoice';

import { 
    ChangeCustomerEmail, 
    ChangeCustomerPhone,
} from './helpers/customer/';


//TODO: Completar el AR incluyendo los servicios de las entidades asociadas (customer y warranty)


export class InvoiceAggregate implements IInvoiceDomainService, ICustomerDomainService {

    private readonly invoiceService?: IInvoiceDomainService;
    private readonly customerService?: ICustomerDomainService;
    private readonly warrantyService?: IWarrantyDomainService;
    private readonly invoiceCreatedEventPublisherBase?: InvoiceCreatedEventPublisherBase;
    private readonly customerCreatedEventPublisherBase?: CustomerCreatedEventPublisherBase;
    private readonly warrantyAddedEventPublisherBase?: WarrantyAddedEventPublisherBase;
    private readonly serviceChargeCalculatedEventPublisherBase?: ServiceChargeCalculatedEventPublisherBase;
    private readonly customerNotifiedEventPublisherBase?: CustomerNotifiedEventPublisherBase;
    private readonly invoiceMarkedAsPaidEventPublisherBase?: InvoiceMarkedAsPaidEventPublisherBase;
    private readonly customerEmailChangedEventPublisherBase?: CustomerEmailChangedEventPublisherBase;
    private readonly customerPhoneChangedEventPublisherBase?: CustomerPhoneChangedEventPublisherBase;


    constructor(
        {
            invoiceService,
            customerService,
            warrantyService,
            invoiceCreatedEventPublisherBase,
            customerCreatedEventPublisherBase,
            warrantyAddedEventPublisherBase,
            serviceChargeCalculatedEventPublisherBase,
            customerNotifiedEventPublisherBase,
            invoiceMarkedAsPaidEventPublisherBase,
            customerEmailChangedEventPublisherBase,
            customerPhoneChangedEventPublisherBase

        }: {
            invoiceService?: IInvoiceDomainService,
            customerService?: ICustomerDomainService,
            warrantyService?: IWarrantyDomainService,
            invoiceCreatedEventPublisherBase?: InvoiceCreatedEventPublisherBase,
            customerCreatedEventPublisherBase?: CustomerCreatedEventPublisherBase,
            warrantyAddedEventPublisherBase?: WarrantyAddedEventPublisherBase,
            serviceChargeCalculatedEventPublisherBase?: ServiceChargeCalculatedEventPublisherBase,
            customerNotifiedEventPublisherBase?: CustomerNotifiedEventPublisherBase,
            invoiceMarkedAsPaidEventPublisherBase?: InvoiceMarkedAsPaidEventPublisherBase,
            customerEmailChangedEventPublisherBase?: CustomerEmailChangedEventPublisherBase,
            customerPhoneChangedEventPublisherBase?: CustomerPhoneChangedEventPublisherBase,
        }
    ) {

        this.invoiceService = invoiceService;
        this.customerService = customerService;
        this.warrantyService = warrantyService;
        this.invoiceCreatedEventPublisherBase = invoiceCreatedEventPublisherBase;
        this.customerCreatedEventPublisherBase = customerCreatedEventPublisherBase;
        this.warrantyAddedEventPublisherBase = warrantyAddedEventPublisherBase;
        this.serviceChargeCalculatedEventPublisherBase = serviceChargeCalculatedEventPublisherBase;
        this.customerNotifiedEventPublisherBase = customerNotifiedEventPublisherBase;
        this.invoiceMarkedAsPaidEventPublisherBase = invoiceMarkedAsPaidEventPublisherBase;
        this.customerEmailChangedEventPublisherBase = customerEmailChangedEventPublisherBase;
        this.customerPhoneChangedEventPublisherBase = customerPhoneChangedEventPublisherBase;
    }



    //#region INVOICE methods

    /**
     * Creates a new Invoice entity
     *
     * @param {ICreateInvoiceCommand} invoiceData
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
    */
    async createInvoice(invoiceData: ICreateInvoiceCommand): Promise<boolean> {

        if (!this.invoiceService) {
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');
        }
        if (!this.invoiceCreatedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "invoiceCreatedEventPublisherBase" is not defined!');
        }

        return await CreateInvoice(invoiceData, this.invoiceService, this.invoiceCreatedEventPublisherBase);
    }

    /**
     * Creates a new Customer entity
     *
     * @param {ICreateCustomerCommand} customerData
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
     */
    async CreateCustomer(customerData: ICreateCustomerCommand): Promise<boolean> {

        if (!this.invoiceService) {
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');
        }
        if (!this.customerCreatedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "customerCreatedEventPublisherBase" is not defined!');
        }

        return await CreateCustomer(customerData, this.invoiceService, this.customerCreatedEventPublisherBase);
    }

    /**
     * Adds a new warranty entity
     *
     * @param {IAddWarrantyCommand} warrantyData
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
     */
    async AddWarranty(warrantyData: IAddWarrantyCommand): Promise<boolean> {
        if (!this.invoiceService) {
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');
        }
        if (!this.warrantyAddedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "warrantyAddedEventPublisherBase" is not defined!');
        }

        return await AddWarranty(warrantyData, this.invoiceService, this.warrantyAddedEventPublisherBase);
    }

    /**
     * Calculates the charge of the service ( ammount to pay )
     *
     * @param {UUIDValueObject} ticketID
     * @return {*}  {Promise<number>} gets the total amount to pay
     * @memberof InvoiceAggregate
     */
    async CalculateServiceCharge(ticketID: UUIDValueObject): Promise<number> {
        if (!this.invoiceService) {
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');
        }
        if (!this.serviceChargeCalculatedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "serviceChargeCalculatedEventPublisherBase" is not defined!');
        }

        return await CalculateServiceCharge(ticketID, this.invoiceService, this.serviceChargeCalculatedEventPublisherBase);
    }

    /**
     * Send a Notification to the costumer abount the pending invoice
     *
     * @param {INotifyCustomerCommand} notification
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
     */
    async NotifyCustomer(notification: INotifyCustomerCommand): Promise<boolean> {
        if (!this.invoiceService) {
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');
        }
        if (!this.customerNotifiedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "customerNotifiedEventPublisherBase" is not defined!');
        }

        return await NotifyCustomer(notification, this.invoiceService, this.customerNotifiedEventPublisherBase);
    }

    /**
     * Marks the invoice as Paid
     *
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
     */
    async MarkAsPaid(): Promise<boolean> {
        if (!this.invoiceService) {
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');
        }
        if (!this.invoiceMarkedAsPaidEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "invoiceMarkedAsPaidEventPublisherBase" is not defined!');
        }

        return await MarkInvoiceAsPaid(this.invoiceService, this.invoiceMarkedAsPaidEventPublisherBase);
    }

    //#endregion


    //#region CUSTOMER methods


    /**
     * Changes the Phone number of the customer
     *
     * @param {IChangeCustomerPhoneCommand} data
     * @return {*}  {Promise<boolean>}
     * @memberof InvoiceAggregate
     */
    async changeCustomerPhone(data: IChangeCustomerPhoneCommand): Promise<boolean> {

        if (!this.customerService) {
            throw new AggregateRootException('InvoiceAggregate: "CustomerService" is not defined!');
        }
        if (!this.customerPhoneChangedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "customerPhoneChangedEventPublisherBase" is not defined!');
        }

        return await ChangeCustomerPhone(data, this.customerService, this.customerPhoneChangedEventPublisherBase);


    }


    /**
     * Changes the Email address of the provided customer
     *
     * @param {IChangeCustomerEmailCommand} data
     * @return {*}  {Promise<boolean>}
     * @memberof InvoiceAggregate
     */
    async changeCustomerEmail(data: IChangeCustomerEmailCommand): Promise<boolean> {

        if (!this.customerService) {
            throw new AggregateRootException('InvoiceAggregate: "CustomerService" is not defined!');
        }
        if (!this.customerEmailChangedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "customerEmailChangedEventPublisherBase" is not defined!');
        }

        return await ChangeCustomerEmail(data, this.customerService, this.customerEmailChangedEventPublisherBase);

    }

    //#endregion

}
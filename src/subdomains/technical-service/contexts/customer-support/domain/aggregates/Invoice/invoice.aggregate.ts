import { AggregateRootException } from '../../../../../../../libs/sofka/exceptions';

import { UUIDValueObject } from '../../value-objects/common';

import {
    ItemAddedToWarrantyEventPublisherBase,
    ItemRemovedFromWarrantyEventPublisherBase,
    WarrantyStatusChangedEventPublisherBase
} from '../../events/publishers/invoice/warranty';

import {
    CustomerEmailChangedEventPublisherBase,
    CustomerPhoneChangedEventPublisherBase
} from '../../events/publishers/invoice/customer';

import {
    IChangeCustomerPhoneCommand,    
} from '../../interfaces/commands/invoice/customer';

import {
    IInvoiceDomainService,
    ICustomerDomainService,
    IWarrantyDomainService
} from '../../services';

import {    
    IAddWarrantyCommand,
    ICreateCustomerCommand,
    INotifyCustomerCommand,
    IAddItemToWarrantyCommand,
    IChangeWarrantyStatusCommand,
    IRemoveItemFromWarrantyCommand
} from '../../interfaces/commands/invoice';

import {
    CustomerCreatedEventPublisherBase,
    InvoiceCreatedEventPublisherBase,
    ServiceChargeCalculatedEventPublisherBase,
    CustomerNotifiedEventPublisherBase,
    InvoiceMarkedAsPaidEventPublisherBase,
    WarrantyAddedEventPublisherBase,
} from '../../events/publishers/invoice';


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
} from './helpers/customer';


import { 
    AddItemToWarranty, 
    ChangeWarrantyStatus, 
    RemoveItemFromWarranty 
} from './helpers/warranty';

import { InvoiceDomainEntityBase } from '../../entities/invoice/invoice.domain-entity';
import { IWarrantyDomainEntity } from '../../entities/interfaces';
import { CustomerDomainEntityBase } from '../../entities/invoice/customer.domain-entity';





export class InvoiceAggregate implements IInvoiceDomainService, ICustomerDomainService, IWarrantyDomainService {

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
    private readonly itemAddedToWarrantyEventPublisherBase?: ItemAddedToWarrantyEventPublisherBase;
    private readonly itemRemovedFromWarrantyEventPublisherBase?: ItemRemovedFromWarrantyEventPublisherBase;
    private readonly warrantyStatusChangedEventPublisherBase?: WarrantyStatusChangedEventPublisherBase;


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
            customerPhoneChangedEventPublisherBase,
            itemAddedToWarrantyEventPublisherBase,
            itemRemovedFromWarrantyEventPublisherBase,
            warrantyStatusChangedEventPublisherBase,

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
            itemAddedToWarrantyEventPublisherBase?: ItemAddedToWarrantyEventPublisherBase,
            itemRemovedFromWarrantyEventPublisherBase?: ItemRemovedFromWarrantyEventPublisherBase,
            warrantyStatusChangedEventPublisherBase?: WarrantyStatusChangedEventPublisherBase,
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
        this.itemAddedToWarrantyEventPublisherBase = itemAddedToWarrantyEventPublisherBase;
        this.itemRemovedFromWarrantyEventPublisherBase = itemRemovedFromWarrantyEventPublisherBase;
        this.warrantyStatusChangedEventPublisherBase = warrantyStatusChangedEventPublisherBase;
    }
   

    //#region INVOICE methods

    /**
     * Creates a new Invoice entity
     *
     * @param {ICreateInvoiceCommand} invoiceData
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
    */
    async createInvoice(invoiceData: InvoiceDomainEntityBase): Promise< InvoiceDomainEntityBase | null > {

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
    async AddWarranty(warrantyData: IWarrantyDomainEntity): Promise<IWarrantyDomainEntity | null> {
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
    async ChangeCustomerPhone(data: CustomerDomainEntityBase): Promise<boolean> {

        if (!this.customerService) {
            throw new AggregateRootException('InvoiceAggregate: "CustomerService" is not defined!');
        }
        if (!this.customerPhoneChangedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "CustomerPhoneChangedEventPublisherBase" is not defined!');
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
    async ChangeCustomerEmail(data: CustomerDomainEntityBase): Promise<boolean> {

        if (!this.customerService) {
            throw new AggregateRootException('InvoiceAggregate: "CustomerService" is not defined!');
        }
        if (!this.customerEmailChangedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "CustomerEmailChangedEventPublisherBase" is not defined!');
        }

        return await ChangeCustomerEmail(data, this.customerService, this.customerEmailChangedEventPublisherBase);
    }

    //#endregion


    //#region WARRANTY methods


    /**
     * Allows to Add an item to the warranty Item List
     *
     * @param {IAddItemToWarrantyCommand} data
     * @return {*}  {Promise<boolean>}
     * @memberof InvoiceAggregate
     */
    async AddItemtoWarranty(data: IAddItemToWarrantyCommand): Promise<boolean> {

        if (!this.warrantyService) {
            throw new AggregateRootException('InvoiceAggregate: "WarrantyService" is not defined!');
        }
        if (!this.itemAddedToWarrantyEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "ItemAddedToWarrantyEventPublisherBase" is not defined!');
        }

        return await AddItemToWarranty(data, this.warrantyService, this.itemAddedToWarrantyEventPublisherBase);
    }


    /**
     * Allows to remove an item from a Warranty Item List
     *
     * @param {IRemoveItemFromWarrantyCommand} data
     * @return {*}  {Promise<boolean>}
     * @memberof InvoiceAggregate
     */
    async RemoveItemFromWarranty(data: IRemoveItemFromWarrantyCommand): Promise<boolean> {
        
        if (!this.warrantyService) {
            throw new AggregateRootException('InvoiceAggregate: "WarrantyService" is not defined!');
        }
        if (!this.itemRemovedFromWarrantyEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "ItemRemovedFromWarrantyEventPublisherBase" is not defined!');
        }

        return await RemoveItemFromWarranty(data, this.warrantyService, this.itemRemovedFromWarrantyEventPublisherBase);
    }


    /**
     * Allows to change the Warranty Status
     *
     * @param {IChangeWarrantyStatusCommand} data
     * @return {*}  {Promise<boolean>}
     * @memberof InvoiceAggregate
     */
    async ChangeWarrantyStatus(data: IChangeWarrantyStatusCommand): Promise<boolean> {
        
        if (!this.warrantyService) {
            throw new AggregateRootException('InvoiceAggregate: "WarrantyService" is not defined!');
        }
        if (!this.warrantyStatusChangedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "WarrantyStatusChangedEventPublisherBase" is not defined!');
        }

        return await ChangeWarrantyStatus(data, this.warrantyService, this.warrantyStatusChangedEventPublisherBase);
    }

    //#endregion

}
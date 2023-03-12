import { AggregateRootException } from '@sofka';

import { UUIDValueObject } from '../../value-objects/common';

import {
    
    WarrantyStatusChangedEventPublisherBase,
    CustomerEmailChangedEventPublisherBase,
    CustomerPhoneChangedEventPublisherBase,
    CustomerCreatedEventPublisherBase,
    InvoiceCreatedEventPublisherBase,
    ServiceChargeCalculatedEventPublisherBase,
    CustomerNotifiedEventPublisherBase,
    InvoiceMarkedAsPaidEventPublisherBase,
    WarrantyAddedEventPublisherBase,
    WarrantyEndDateChangedEventPublisherBase,

} from '../../events/publishers/invoice/';


import {
    IInvoiceDomainService,
    ICustomerDomainService,
    IWarrantyDomainService
} from '../../services';

import {
    CreateInvoice,
    CreateCustomer,
    AddWarranty,        
    MarkInvoiceAsPaid,
    ChangeCustomerEmail,
    ChangeCustomerPhone,    
    ChangeWarrantyStatus,     
    ChangeWarrantyEndDate

} from './helpers';


import { 
    WarrantyDomainEntityBase, 
    CustomerDomainEntityBase, 
    InvoiceDomainEntityBase
} from '../../entities/invoice/';

import { IWarrantyDomainEntity } from '../../entities/interfaces';


export class InvoiceAggregate implements IInvoiceDomainService, ICustomerDomainService, IWarrantyDomainService {

    private readonly invoiceService?: IInvoiceDomainService;
    private readonly customerService?: ICustomerDomainService;
    private readonly warrantyService?: IWarrantyDomainService;
    private readonly invoiceCreatedEventPublisherBase?: InvoiceCreatedEventPublisherBase;
    private readonly customerCreatedEventPublisherBase?: CustomerCreatedEventPublisherBase;
    private readonly warrantyAddedEventPublisherBase?: WarrantyAddedEventPublisherBase;
    private readonly serviceChargeCalculatedEventPublisherBase?: ServiceChargeCalculatedEventPublisherBase;    
    private readonly invoiceMarkedAsPaidEventPublisherBase?: InvoiceMarkedAsPaidEventPublisherBase;
    private readonly customerEmailChangedEventPublisherBase?: CustomerEmailChangedEventPublisherBase;
    private readonly customerPhoneChangedEventPublisherBase?: CustomerPhoneChangedEventPublisherBase;    
    private readonly warrantyEndDateChangedEventPublisherBase?: WarrantyEndDateChangedEventPublisherBase;
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
            warrantyEndDateChangedEventPublisherBase,
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
            warrantyEndDateChangedEventPublisherBase?: WarrantyEndDateChangedEventPublisherBase,
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
        this.invoiceMarkedAsPaidEventPublisherBase = invoiceMarkedAsPaidEventPublisherBase;
        this.customerEmailChangedEventPublisherBase = customerEmailChangedEventPublisherBase;
        this.customerPhoneChangedEventPublisherBase = customerPhoneChangedEventPublisherBase;        
        this.warrantyEndDateChangedEventPublisherBase = warrantyEndDateChangedEventPublisherBase;
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
    async CreateCustomer(customerData: CustomerDomainEntityBase): Promise<CustomerDomainEntityBase | null> {

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
     * Marks the invoice as Paid
     *
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
     */
    async MarkAsPaid(data: InvoiceDomainEntityBase): Promise<boolean> {
        
        if (!this.invoiceService) {
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');
        }
        if (!this.invoiceMarkedAsPaidEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "invoiceMarkedAsPaidEventPublisherBase" is not defined!');
        }

        return await MarkInvoiceAsPaid(data, this.invoiceService, this.invoiceMarkedAsPaidEventPublisherBase);
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
     * Allows to remove an item from a Warranty Item List
     *
     * @param {IRemoveItemFromWarrantyCommand} data
     * @return {*}  {Promise<boolean>}
     * @memberof InvoiceAggregate
     */
    async ChangeWarrantyEndDate(data: WarrantyDomainEntityBase): Promise<boolean> {
        
        if (!this.warrantyService) {
            throw new AggregateRootException('InvoiceAggregate: "WarrantyService" is not defined!');
        }
        if (!this.warrantyEndDateChangedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "WarrantyEndDateChangedEventPublisherBase" is not defined!');
        }

        return await ChangeWarrantyEndDate(data, this.warrantyService, this.warrantyEndDateChangedEventPublisherBase);
    }


    /**
     * Allows to change the Warranty Status
     *
     * @param {IChangeWarrantyStatusCommand} data
     * @return {*}  {Promise<boolean>}
     * @memberof InvoiceAggregate
     */
    async ChangeWarrantyStatus(data: WarrantyDomainEntityBase): Promise<boolean> {
        
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
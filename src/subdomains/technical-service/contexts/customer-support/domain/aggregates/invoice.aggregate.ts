import { AggregateRootException } from '../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { IInvoiceDomainService } from '../services/invoice.domain-service';
import { ICreateInvoiceCommand, IAddWarrantyCommand, ICreateCustomerCommand, INotifyCustomerCommand } from '../interfaces/commands/invoice';
import { CustomerCreatedEventPublisherBase, InvoiceCreatedEventPublisherBase} from '../events/publishers/invoice';
import { UUIDValueObject } from '../value-objects/common';
import { CreateInvoice, CreateCustomer, AddWarranty, CalculateServiceCharge, NotifyCustomer, MarkInvoiceAsPaid} from './helpers/Invoice';
import { WarrantyAddedEventPublisherBase } from '../events/publishers/invoice/warranty-added.event-publisher';
import { ServiceChargeCalculatedEventPublisherBase } from '../events/publishers/invoice/service-charge-calculated.event-publisher';
import { CustomerNotifiedEventPublisherBase } from '../events/publishers/invoice/customer-notified.event-publisher';
import { InvoiceMarkedAsPaidEventPublisherBase } from '../events/publishers/invoice/marked-as-paid.event-publisher';




export class InvoiceAggregate implements IInvoiceDomainService{

    private readonly invoiceService?: IInvoiceDomainService;
    private readonly invoiceCreatedEventPublisherBase?: InvoiceCreatedEventPublisherBase;
    private readonly customerCreatedEventPublisherBase?: CustomerCreatedEventPublisherBase;
    private readonly warrantyAddedEventPublisherBase?: WarrantyAddedEventPublisherBase;
    private readonly serviceChargeCalculatedEventPublisherBase?: ServiceChargeCalculatedEventPublisherBase;
    private readonly customerNotifiedEventPublisherBase?: CustomerNotifiedEventPublisherBase;
    private readonly invoiceMarkedAsPaidEventPublisherBase?: InvoiceMarkedAsPaidEventPublisherBase;

    constructor(
        {
            invoiceService,
            invoiceCreatedEventPublisherBase,
            customerCreatedEventPublisherBase,
            warrantyAddedEventPublisherBase,
            serviceChargeCalculatedEventPublisherBase,
            customerNotifiedEventPublisherBase,
            invoiceMarkedAsPaidEventPublisherBase,

        }:{
            invoiceService?: IInvoiceDomainService,
            invoiceCreatedEventPublisherBase?: InvoiceCreatedEventPublisherBase,
            customerCreatedEventPublisherBase?: CustomerCreatedEventPublisherBase,
            warrantyAddedEventPublisherBase?: WarrantyAddedEventPublisherBase,
            serviceChargeCalculatedEventPublisherBase?: ServiceChargeCalculatedEventPublisherBase,
            customerNotifiedEventPublisherBase?: CustomerNotifiedEventPublisherBase,
            invoiceMarkedAsPaidEventPublisherBase?: InvoiceMarkedAsPaidEventPublisherBase,
        }
    ){

        this.invoiceService = invoiceService; 
        this.invoiceCreatedEventPublisherBase = invoiceCreatedEventPublisherBase;
        this.customerCreatedEventPublisherBase = customerCreatedEventPublisherBase;
        this.warrantyAddedEventPublisherBase = warrantyAddedEventPublisherBase;
        this.serviceChargeCalculatedEventPublisherBase = serviceChargeCalculatedEventPublisherBase;
        this.customerNotifiedEventPublisherBase = customerNotifiedEventPublisherBase;
        this.invoiceMarkedAsPaidEventPublisherBase = invoiceMarkedAsPaidEventPublisherBase;
    }

    /**
     * Creates a new Invoice entity
     *
     * @param {ICreateInvoiceCommand} invoiceData
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
     */
    async createInvoice (invoiceData: ICreateInvoiceCommand): Promise<boolean> {
        
        if(!this.invoiceService){
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');        
        }
        if(!this.invoiceCreatedEventPublisherBase){
            throw new AggregateRootException('InvoiceAggregate: "invoiceCreatedEventPublisherBase" is not defined!');
        }
        
        return CreateInvoice(invoiceData, this.invoiceService, this.invoiceCreatedEventPublisherBase);
    }   

    /**
     * Creates a new Customer entity
     *
     * @param {ICreateCustomerCommand} customerData
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
     */
    CreateCustomer(customerData: ICreateCustomerCommand): Promise<boolean> {

       if(!this.invoiceService){
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');        
        }
        if(!this.customerCreatedEventPublisherBase){
            throw new AggregateRootException('InvoiceAggregate: "customerCreatedEventPublisherBase" is not defined!');
        }

        return CreateCustomer(customerData, this.invoiceService, this.customerCreatedEventPublisherBase);
    }

    /**
     * Adds a new warranty entity
     *
     * @param {IAddWarrantyCommand} warrantyData
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
     */
    AddWarranty(warrantyData: IAddWarrantyCommand): Promise<boolean> {
        if(!this.invoiceService){
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');        
        }
        if(!this.warrantyAddedEventPublisherBase){
            throw new AggregateRootException('InvoiceAggregate: "warrantyAddedEventPublisherBase" is not defined!');
        }

        return AddWarranty(warrantyData, this.invoiceService, this.warrantyAddedEventPublisherBase);
    }

    /**
     * Calculates the charge of the service ( ammount to pay )
     *
     * @param {UUIDValueObject} ticketID
     * @return {*}  {Promise<number>} gets the total amount to pay
     * @memberof InvoiceAggregate
     */
    CalculateServiceCharge(ticketID: UUIDValueObject): Promise<number> {
        if(!this.invoiceService){
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');        
        }
        if(!this.serviceChargeCalculatedEventPublisherBase){
            throw new AggregateRootException('InvoiceAggregate: "serviceChargeCalculatedEventPublisherBase" is not defined!');
        }

        return CalculateServiceCharge(ticketID, this.invoiceService, this.serviceChargeCalculatedEventPublisherBase);
    }

    /**
     * Send a Notification to the costumer abount the pending invoice
     *
     * @param {INotifyCustomerCommand} notification
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
     */
    NotifyCustomer(notification: INotifyCustomerCommand): Promise<boolean> {
        if(!this.invoiceService){
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');        
        }
        if(!this.customerNotifiedEventPublisherBase){
            throw new AggregateRootException('InvoiceAggregate: "customerNotifiedEventPublisherBase" is not defined!');
        }

        return NotifyCustomer(notification, this.invoiceService, this.customerNotifiedEventPublisherBase);
    }    

    /**
     * Marks the invoice as Paid
     *
     * @return {*}  {Promise<boolean>} success ( true / false )
     * @memberof InvoiceAggregate
     */
    MarkAsPaid(): Promise<boolean> {
        if(!this.invoiceService){
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');        
        }
        if(!this.invoiceMarkedAsPaidEventPublisherBase){
            throw new AggregateRootException('InvoiceAggregate: "invoiceMarkedAsPaidEventPublisherBase" is not defined!');
        }

        return MarkInvoiceAsPaid(this.invoiceService, this.invoiceMarkedAsPaidEventPublisherBase);
    }
    





}
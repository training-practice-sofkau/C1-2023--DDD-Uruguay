import { AggregateRootException } from '../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { IInvoiceDomainService } from '../services/invoice.domain-service';
import { ICreateInvoiceCommand, IAddWarrantyCommand, ICreateCustomerCommand } from '../interfaces/commands/invoice';
import { CustomerCreatedEventPublisherBase, InvoiceCreatedEventPublisherBase} from '../events/publishers/invoice';
import { UUIDValueObject } from '../value-objects/common';
import { CreateInvoice, CreateCustomer, AddWarranty} from './helpers/Invoice';
import { WarrantyAddedEventPublisherBase } from '../events/publishers/invoice/warranty-added.event-publisher';

export class InvoiceAggregate implements IInvoiceDomainService{

    private readonly invoiceService?: IInvoiceDomainService;
    private readonly invoiceCreatedEventPublisherBase?: InvoiceCreatedEventPublisherBase;
    private readonly customerCreatedEventPublisherBase?: CustomerCreatedEventPublisherBase;
    private readonly warrantyAddedEventPublisherBase?: WarrantyAddedEventPublisherBase;
    

    constructor(
        {
            invoiceService,
            invoiceCreatedEventPublisherBase,
            customerCreatedEventPublisherBase,
            warrantyAddedEventPublisherBase,

        }:{
            invoiceService?: IInvoiceDomainService,
            invoiceCreatedEventPublisherBase?: InvoiceCreatedEventPublisherBase,
            customerCreatedEventPublisherBase?: CustomerCreatedEventPublisherBase,
            warrantyAddedEventPublisherBase?: WarrantyAddedEventPublisherBase,
        }
    ){

        this.invoiceService = invoiceService; 
        this.invoiceCreatedEventPublisherBase = invoiceCreatedEventPublisherBase;
        this.customerCreatedEventPublisherBase = customerCreatedEventPublisherBase;
        this.warrantyAddedEventPublisherBase = warrantyAddedEventPublisherBase;
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



    AddWarranty(warrantyData: IAddWarrantyCommand): Promise<boolean> {
        if(!this.invoiceService){
            throw new AggregateRootException('InvoiceAggregate: "InvoiceService" is not defined!');        
        }
        if(!this.warrantyAddedEventPublisherBase){
            throw new AggregateRootException('InvoiceAggregate: "warrantyAddedEventPublisherBase" is not defined!');
        }

        return AddWarranty(warrantyData, this.invoiceService, this.warrantyAddedEventPublisherBase);
    }





    CalculateServiceCharge(ticketID: UUIDValueObject): Promise<number> {
        throw new Error('Method not implemented.');
    }
    NotifyCustomer(customerID: UUIDValueObject): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    
    MarkAsPaid(): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    





}
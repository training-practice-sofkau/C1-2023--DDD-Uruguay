
import { IInvoiceDomainService } from '../services/invoice.domain-service';
import { AggregateRootException } from '../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { ICreateInvoiceCommand } from '../interfaces/commands/invoice/create-invoice.command';
import { InvoiceCreatedEventPublisherBase } from '../events/publishers/invoice/invoice-created.event-publisher';
import { ICreateCustomerCommand } from '../interfaces/commands/invoice/customer/create-customer.command';
import { IAddWarrantyCommand } from '../interfaces/commands/invoice/warranty/add-warranty.command';
import { UUIDValueObject } from '../value-objects/common';
import { CreateInvoice } from './helpers/Invoice';

export class InvoiceAggregate implements IInvoiceDomainService{

    private readonly invoiceService?: IInvoiceDomainService;
    private readonly invoiceCreatedEventPublisherBase?: InvoiceCreatedEventPublisherBase;
    

    constructor(
        {
            invoiceService,
            invoiceCreatedEventPublisherBase,

        }:{
            invoiceService?: IInvoiceDomainService,
            invoiceCreatedEventPublisherBase?: InvoiceCreatedEventPublisherBase,
        }
    ){

        this.invoiceService = invoiceService; 
        this.invoiceCreatedEventPublisherBase = invoiceCreatedEventPublisherBase;

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
            throw new AggregateRootException('InvoiceAggregate: "InvoiceCreatedEventPublisher" is not defined!');
        }
        
        return CreateInvoice(invoiceData, this.invoiceService, this.invoiceCreatedEventPublisherBase);
    }   

    CalculateServiceCharge(ticketID: UUIDValueObject): Promise<number> {
        throw new Error('Method not implemented.');
    }
    NotifyCustomer(customerID: UUIDValueObject): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    AddWarranty(warrantyData: IAddWarrantyCommand): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    MarkAsPaid(): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    CreateCustomer(customerData: ICreateCustomerCommand): Promise<boolean> {
        throw new Error('Method not implemented.');
    }





}
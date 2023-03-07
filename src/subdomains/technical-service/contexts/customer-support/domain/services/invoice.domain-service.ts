
import { UUIDValueObject, NoteValueObject } from '../value-objects/common';
import { ICreateCustomerCommand, IAddWarrantyCommand, ICreateInvoiceCommand } from '../interfaces/commands/invoice';
import { INotifyCustomerCommand } from '../interfaces/commands/invoice/notify-customer.command';

export interface IInvoiceDomainService { // <T extends InvoiceDomainEntityBase = InvoiceDomainEntityBase>


    createInvoice( invoiceData: ICreateInvoiceCommand ) : Promise < boolean >; //return success (true/false) 

    CalculateServiceCharge( ticketID: UUIDValueObject ) : Promise < number | null >; //return amount (number) or error (null)

    NotifyCustomer( notification: INotifyCustomerCommand ) : Promise < boolean >  //return success (true/false) 

    AddWarranty( warrantyData: IAddWarrantyCommand ) : Promise < boolean >//return success (true/false) 

    MarkAsPaid() : Promise <boolean> //return success (true/false) 
    
    CreateCustomer( customerData : ICreateCustomerCommand ) : Promise < boolean > //return success (true/false) 
    
}
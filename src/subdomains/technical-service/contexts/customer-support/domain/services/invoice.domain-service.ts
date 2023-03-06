
import { UUIDValueObject } from '../value-objects/common/uuid/uuid.value-object';
import { ICreateCustomerCommand } from '../interfaces/commands/invoice/customer/create-customer.command';
import { IAddWarrantyCommand } from '../interfaces/commands/invoice/warranty/add-warranty.command';
import { ICreateInvoiceCommand } from '../interfaces/commands/invoice/create-invoice.command';

export interface IInvoiceDomainService { // <T extends InvoiceDomainEntityBase = InvoiceDomainEntityBase>


    createInvoice( invoiceData: ICreateInvoiceCommand ) : Promise < boolean >; //return success (true/false) 

    CalculateServiceCharge( ticketID: UUIDValueObject ) : Promise < number | null >; //return amount (number) or error (null)

    NotifyCustomer( customerID: UUIDValueObject ) : Promise < boolean >  //return success (true/false) 

    AddWarranty( warrantyData: IAddWarrantyCommand ) : Promise < boolean >//return success (true/false) 

    MarkAsPaid() : Promise <boolean> //return success (true/false) 
    
    CreateCustomer( customerData : ICreateCustomerCommand ) : Promise < boolean > //return success (true/false) 
    
}
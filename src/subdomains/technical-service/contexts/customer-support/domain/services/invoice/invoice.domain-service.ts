
import { UUIDValueObject } from '../../value-objects/common';
import { ICreateCustomerCommand, IAddWarrantyCommand } from '../../interfaces/commands/invoice';
import { INotifyCustomerCommand } from '../../interfaces/commands/invoice/notify-customer.command';
import { InvoiceDomainEntityBase } from '../../entities/invoice/invoice.domain-entity';
import { IWarrantyDomainEntity } from '../../entities/interfaces';
import { CustomerDomainEntityBase } from '../../entities/invoice/customer.domain-entity';

export interface IInvoiceDomainService { // <T extends InvoiceDomainEntityBase = InvoiceDomainEntityBase>


    createInvoice( invoiceData: InvoiceDomainEntityBase ) : Promise < InvoiceDomainEntityBase | null >; //return success (true/false) 

    CalculateServiceCharge( ticketID: UUIDValueObject ) : Promise < number | null >; //return amount (number) or error (null)

    NotifyCustomer( notification: INotifyCustomerCommand ) : Promise < boolean >  //return success (true/false) 

    AddWarranty( warrantyData: IWarrantyDomainEntity ) : Promise < IWarrantyDomainEntity | null >//return success (true/false) 

    MarkAsPaid(invoiceData: InvoiceDomainEntityBase) : Promise <boolean> //return success (true/false) 
    
    CreateCustomer( customerData : CustomerDomainEntityBase ) : Promise < CustomerDomainEntityBase | null > //return success (true/false) 
    
}
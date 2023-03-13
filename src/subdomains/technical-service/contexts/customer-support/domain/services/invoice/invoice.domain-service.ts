import { CustomerDomainEntityBase, InvoiceDomainEntityBase } from '../../entities/invoice/';
import { IWarrantyDomainEntity } from '../../entities/interfaces';


export interface IInvoiceDomainService { // <T extends InvoiceDomainEntityBase = InvoiceDomainEntityBase>


    createInvoice( invoiceData: InvoiceDomainEntityBase ) : Promise < InvoiceDomainEntityBase | null >; //return success (true/false)        

    AddWarranty( warrantyData: IWarrantyDomainEntity ) : Promise < IWarrantyDomainEntity | null >//return success (true/false) 

    MarkAsPaid(invoiceData: InvoiceDomainEntityBase) : Promise <boolean> //return success (true/false) 
    
    CreateCustomer( customerData : CustomerDomainEntityBase ) : Promise < CustomerDomainEntityBase | null > //return success (true/false) 
    
}
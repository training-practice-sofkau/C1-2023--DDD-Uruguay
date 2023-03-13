import { Injectable } from "@nestjs/common";
import { IWarrantyDomainEntity } from "../../../../../domain/entities/interfaces";
import { InvoiceDomainEntityBase, CustomerDomainEntityBase } from "../../../../../domain/entities/invoice";
import { IInvoiceDomainService } from "../../../../../domain/services";
import { InvoiceRepository } from '../repositories/invoice.repository';

@Injectable()
export class InvoiceMySqlService implements IInvoiceDomainService{

    constructor(
        private readonly invoiceRepository: InvoiceRepository
    ){}


    createInvoice(invoiceData: InvoiceDomainEntityBase): Promise<InvoiceDomainEntityBase> {
        throw new Error("Method not implemented.");
    }


    AddWarranty(warrantyData: IWarrantyDomainEntity): Promise<IWarrantyDomainEntity> {
        throw new Error("Method not implemented.");
    }


    MarkAsPaid(invoiceData: InvoiceDomainEntityBase): Promise<boolean> {
        throw new Error("Method not implemented.");
    }


    CreateCustomer(customerData: CustomerDomainEntityBase): Promise<CustomerDomainEntityBase> {
        throw new Error("Method not implemented.");
    }
    

//TODO: implementar metodos
    
    
}
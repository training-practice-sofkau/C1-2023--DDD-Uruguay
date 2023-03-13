import { Injectable } from "@nestjs/common";
import { IWarrantyDomainEntity } from "../../../../../domain/entities/interfaces";
import { InvoiceDomainEntityBase, CustomerDomainEntityBase } from "../../../../../domain/entities/invoice";
import { IInvoiceDomainService } from "../../../../../domain/services";
import { WarrantyRepository, CustomerRepository, InvoiceRepository } from '../repositories/';

@Injectable()
export class InvoiceMySqlService implements IInvoiceDomainService{

    constructor(
        private readonly invoiceRepository: InvoiceRepository,
        private readonly customerRepository: CustomerRepository,
        private readonly warrantyRepository: WarrantyRepository
    ){}



    /**
     * creates a new invoice entity in DB
     *
     * @param {InvoiceDomainEntityBase} invoiceData
     * @return {*}  {Promise<InvoiceDomainEntityBase>}
     * @memberof InvoiceMySqlService
     */
    async createInvoice(invoiceData: InvoiceDomainEntityBase): Promise<InvoiceDomainEntityBase> {
        
        return await this.invoiceRepository.create(invoiceData);
    }



    /**
     * Adds a new Warranty Entity to DB
     *
     * @param {IWarrantyDomainEntity} warrantyData
     * @return {*}  {Promise<IWarrantyDomainEntity>}
     * @memberof InvoiceMySqlService
     */
    async AddWarranty(warrantyData: IWarrantyDomainEntity): Promise<IWarrantyDomainEntity> {
        return await this.warrantyRepository.create(warrantyData);
    }



    /**
     * Updates the Paid status of the invoice
     *
     * @param {InvoiceDomainEntityBase} invoiceData
     * @return {*}  {Promise<boolean>}
     * @memberof InvoiceMySqlService
     */
    async MarkAsPaid(invoiceData: InvoiceDomainEntityBase): Promise<boolean> {
        
        if(this.invoiceRepository.update(invoiceData)) return await true;

        return false;
        
    }



    /**
     * adds a new Customer Entity to the DB
     *
     * @param {CustomerDomainEntityBase} customerData
     * @return {*}  {Promise<CustomerDomainEntityBase>}
     * @memberof InvoiceMySqlService
     */
    async CreateCustomer(customerData: CustomerDomainEntityBase): Promise<CustomerDomainEntityBase> {

        return await this.customerRepository.create(customerData);

    }
    
}
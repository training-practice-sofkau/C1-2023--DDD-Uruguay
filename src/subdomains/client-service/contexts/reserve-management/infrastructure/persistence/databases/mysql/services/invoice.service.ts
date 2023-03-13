import { Injectable } from "@nestjs/common";
import { IInvoiceDomainService } from "../../../../../domain";
import { InvoiceMySqlEntity } from "../entities";
import { InvoiceRepository } from '../repositories';

@Injectable()
export class InvoiceMySqlService
    implements IInvoiceDomainService<InvoiceMySqlEntity> {

    constructor(
        private readonly invoiceRepository: InvoiceRepository,
    ) { }

    updateCost(entity: InvoiceMySqlEntity): Promise<InvoiceMySqlEntity> {
        return this.invoiceRepository.update(entity.invoiceId, entity);
    }

}
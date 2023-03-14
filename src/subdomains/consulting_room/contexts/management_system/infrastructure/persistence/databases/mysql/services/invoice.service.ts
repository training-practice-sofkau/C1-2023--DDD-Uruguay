import { Injectable, BadRequestException } from '@nestjs/common';
import { IInvoiceDomainService } from 'src/subdomains/consulting_room/contexts/management_system/domain/services/invoice.domain-service';

import { InvoiceMySqlEntity } from '../entities/invoice.entity';
import { InvoiceRepository } from '../repositories/invoice.repository';

@Injectable()
export class InvoiceMySqlService
    implements IInvoiceDomainService<InvoiceMySqlEntity> {

    constructor(
        private readonly invoiceRepository: InvoiceRepository
    ) { }

    getInvoice(invoiceId: string): Promise<InvoiceMySqlEntity> {
        return this.invoiceRepository.findById(invoiceId)
    }
    addInvoice(invoice: InvoiceMySqlEntity): Promise<InvoiceMySqlEntity> {
        return this.invoiceRepository.create(invoice)
    }
    updateAmount(invoiceId: string, entity): Promise<InvoiceMySqlEntity> {
        return this.invoiceRepository.update(invoiceId, entity)
    }

   
}
import { Injectable } from "@nestjs/common";
import { ICheckOutDomainService } from "../../../../../domain";
import { CheckOutMySqlEntity, ConsumptionMySqlEntity, InvoiceMySqlEntity } from "../entities";
import { CheckOutRepository, ConsumptionRepository, InvoiceRepository } from '../repositories';

@Injectable()
export class CheckOutMySqlService
    implements ICheckOutDomainService<CheckOutMySqlEntity> {

    constructor(
        private readonly checkOutRepository: CheckOutRepository,
        private readonly consumptionRepository: ConsumptionRepository,
        private readonly invoiceRepository: InvoiceRepository,
    ) { }


    createCheckOut(checkOut: CheckOutMySqlEntity): Promise<CheckOutMySqlEntity> {
        return this.checkOutRepository.create(checkOut);
    }

    addConsumption(consumption: ConsumptionMySqlEntity): Promise<ConsumptionMySqlEntity> {
        return this.consumptionRepository.create(consumption);
    }

    addInvoice(invoice: InvoiceMySqlEntity): Promise<InvoiceMySqlEntity> {
        return this.invoiceRepository.create(invoice);
    }

    getConsumption(data: string): Promise<ConsumptionMySqlEntity> {
        return this.consumptionRepository.findById(data);
    }

    getInvoice(data: string): Promise<InvoiceMySqlEntity> {
        return this.invoiceRepository.findById(data);
    }

}
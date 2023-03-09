import { EventPublisherBase } from "@sofka";
import { InvoiceDomainEntityBase } from "../../../entities/invoice/invoice.domain-entity";
export abstract class InvoiceCreatedEventPublisherBase < Response = InvoiceDomainEntityBase | null > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.invoice-created',
            JSON.stringify({ data: this.response })
        )
    }
}

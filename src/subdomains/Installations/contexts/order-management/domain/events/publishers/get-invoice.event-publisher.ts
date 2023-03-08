import { EventPublisherBase } from "src/libs";
import { InvoiceDomainEntityBase } from "../../entities";


export abstract class GetInvoiceEventPublisherBase<
    Response = InvoiceDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.invoice.invoice_get',
            JSON.stringify({ data: this.response })
        )
    }
}
import { EventPublisherBase } from "src/libs";
import { InvoiceDomainEntityBase } from "../../entities";


export abstract class RegisteredInvoiceEventPublisherBase<
    Response = InvoiceDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.registered-invoice',
            JSON.stringify({ data: this.response })
        )
    }
}
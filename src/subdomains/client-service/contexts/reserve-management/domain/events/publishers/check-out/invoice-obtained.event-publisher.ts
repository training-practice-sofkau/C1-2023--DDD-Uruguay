import { EventPublisherBase } from "src/libs/sofka";
import { InvoiceDomainEntity } from "../../../entities";

export abstract class InvoiceObtainedEventPublisher<
    Response = InvoiceDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.invoice-obtained',
            JSON.stringify({ data: this.response })
        )
    }
}
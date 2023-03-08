import { EventPublisherBase } from "src/libs/sofka";
import { InvoiceDomainEntity } from "../../../entities";

export abstract class InvoiceAddedEventPublisher<
    Response = InvoiceDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.invoice-added',
            JSON.stringify({ data: this.response })
        )
    }
}
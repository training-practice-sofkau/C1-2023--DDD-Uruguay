import { EventPublisherBase } from "src/libs/sofka";
import { InvoiceDomainEntity } from "../../../../entities";

export abstract class CostUpdatedEventPublisher<
    Response = InvoiceDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.cost-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
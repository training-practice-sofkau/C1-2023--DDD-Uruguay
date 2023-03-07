import { EventPublisherBase } from "src/libs";
import { OrderDomainEntityBase } from "../../../entities/Order-domain/Order-domain-entity";

export class OrderModifiedEventPublisher <
Response = OrderDomainEntityBase
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'order-publish-event',
            JSON.stringify({ data: this.response })
        )
}
}
import { EventPublisherBase } from "src/libs";
import { OrderDomainEntityBase } from "../../../entities/Order-domain/Order-domain-entity";
/**
 *
 *
 * @export
 * @abstract
 * @class OrderAddEventPublisher
 * @extends {EventPublisherBase<OrderDomainEntityBase>}
 */
export abstract class OrderAddEventPublisher  <
Response = OrderDomainEntityBase
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'order-added-modified-successfull',
            JSON.stringify({ data: this.response })
        )
}
}

import { EventPublisherBase } from "src/libs";
import { OrderDomainEntityBase } from "../../entities";


export abstract class GetOrderEventPublisherBase<
    Response = OrderDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'order_management.order.order_get',
            JSON.stringify({ data: this.response })
        )
    }
}
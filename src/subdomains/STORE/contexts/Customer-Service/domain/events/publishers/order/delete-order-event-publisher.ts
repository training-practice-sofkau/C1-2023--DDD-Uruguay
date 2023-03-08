import { EventPublisherBase } from "src/libs";
import { OrderDomainEntityBase } from "../../../entities/Order-domain/Order-domain-entity";

export class DeleteOrderEventPublisher <
Response = OrderDomainEntityBase
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'order-delete',
            JSON.stringify({ data: this.response })
        )
}
}
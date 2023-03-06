
import { EventPublisherBase } from "src/libs";
import { OrderDomainEntityBase } from "../../entities";


export abstract class RegisteredOrderEventPublisherBase<
    Response = OrderDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.registered-order',
            JSON.stringify({ data: this.response })
        )
    }
}
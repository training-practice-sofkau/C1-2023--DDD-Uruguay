import { EventPublisherBase } from "src/libs";
import { EmployedDomainEntityBase } from "../../../entities/order";


export abstract class OrderEmployedUpdatedEventPublisherBase<
    Response = EmployedDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.order.employed_updated',
            JSON.stringify({ data: this.response })
        )
    }
}
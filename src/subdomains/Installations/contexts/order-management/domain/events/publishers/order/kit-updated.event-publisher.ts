import { EventPublisherBase } from "src/libs";
import { KitDomainEntityBase } from "../../../entities/order";


export abstract class OrderKitUpdatedEventPublisherBase<
    Response = KitDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.order.kit_updated',
            JSON.stringify({ data: this.response })
        )
    }
}
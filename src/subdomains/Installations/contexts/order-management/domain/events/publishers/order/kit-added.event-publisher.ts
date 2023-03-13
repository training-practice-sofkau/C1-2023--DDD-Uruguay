import { EventPublisherBase } from "src/libs";

import { KitDomainEntityBase } from "../../../entities/order";

export abstract class OrderKitAddedEventPublisherBase<
  Response = KitDomainEntityBase
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      "order_management.order.kit_added",
      JSON.stringify({ data: this.response })
    );
  }
}

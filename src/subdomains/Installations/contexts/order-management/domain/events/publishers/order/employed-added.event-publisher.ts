import { EventPublisherBase } from "src/libs";

import { EmployedDomainEntityBase } from "../../../entities/order";

export abstract class OrderEmployedAddedEventPublisherBase<
  Response = EmployedDomainEntityBase
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      "order_management.order.employed_added",
      JSON.stringify({ data: this.response })
    );
  }
}

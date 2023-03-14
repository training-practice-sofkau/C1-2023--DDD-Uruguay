import { EventPublisherBase } from "src/libs";

import { BenefitedDomainEntityBase } from "../../../entities/order";

export abstract class OrderBenefitedAddedEventPublisherBase<
  Response = BenefitedDomainEntityBase
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      "order_management.order.benefited_added",
      JSON.stringify({ data: this.response })
    );
  }
}

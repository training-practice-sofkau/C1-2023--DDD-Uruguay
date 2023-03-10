import { EventPublisherBase } from "src/libs";
import { BenefitedDomainEntityBase } from "../../../entities/order";


export abstract class OrderBenefitedUpdatedEventPublisherBase<
    Response = BenefitedDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'order_management.order.benefited_updated',
            JSON.stringify({ data: this.response })
        )
    }
}
import { EventPublisherBase } from "src/libs";
import { BillDomain } from "../../../../entities/Sale-domain/bill-domain-entity";

export class PaymentMethodEventPublisher <
Response = BillDomain
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'event-publish',
            JSON.stringify({ data: this.response })
        )
}
}

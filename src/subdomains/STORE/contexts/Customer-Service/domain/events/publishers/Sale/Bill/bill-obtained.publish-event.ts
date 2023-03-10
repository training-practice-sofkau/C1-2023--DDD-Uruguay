import { EventPublisherBase } from "src/libs";
import { BillDomain } from "../../../../entities";

export class BillObtainedEventPublisher  <
Response = BillDomain
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'sale-bill-get-successfull',
            JSON.stringify({ data: this.response })
        )
}
}
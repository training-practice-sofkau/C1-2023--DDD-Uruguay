import { EventPublisherBase } from "src/libs";
import { SellerDomain } from "../../../../entities";

export class SellerObtainedEventPublisher  <
Response = SellerDomain
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'sale-seller-get-successfull',
            JSON.stringify({ data: this.response })
        )
}
}
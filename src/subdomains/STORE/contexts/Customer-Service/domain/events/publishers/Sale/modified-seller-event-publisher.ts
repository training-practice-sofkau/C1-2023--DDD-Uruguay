import { EventPublisherBase } from "src/libs";
import { SellerDomain } from '../../../entities/Sale-domain/seller-domain-entity';

export class SellerModifiedEventPublisher <
Response = SellerDomain
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'sale-seller-modified-successfull',
            JSON.stringify({ data: this.response })
        )
}
}

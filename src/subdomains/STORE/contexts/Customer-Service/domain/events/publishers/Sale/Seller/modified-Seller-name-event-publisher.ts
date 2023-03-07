import { EventPublisherBase } from "src/libs/sofka";
import { BillDomain } from "../../../../entities/Sale-domain/bill-domain-entity";
import { SellerDomain } from '../../../../entities/Sale-domain/seller-domain-entity';

export class SellerNameModifiedEventPublisher <
Response = SellerDomain
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'sale-seller-name-modified-successfull',
            JSON.stringify({ data: this.response })
        )
}
}


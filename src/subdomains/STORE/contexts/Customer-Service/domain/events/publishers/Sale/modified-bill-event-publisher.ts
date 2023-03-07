import { EventPublisherBase } from "src/libs";
import { BillDomain } from '../../../entities/Sale-domain/bill-domain-entity';

export class BillModifiedEventPublisher <
Response = BillDomain
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'sale-bill-modified-successfull',
            JSON.stringify({ data: this.response })
        )
}
}
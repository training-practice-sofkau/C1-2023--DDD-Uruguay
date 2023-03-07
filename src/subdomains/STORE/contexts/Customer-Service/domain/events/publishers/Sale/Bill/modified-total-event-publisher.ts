import { EventPublisherBase } from "src/libs";
import { BillDomain } from '../../../../entities/Sale-domain/bill-domain-entity';

export class TotalModifiedEventPublisher <
Response = BillDomain
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'sale-total-modified-successfull',
            JSON.stringify({ data: this.response })
        )
}
}

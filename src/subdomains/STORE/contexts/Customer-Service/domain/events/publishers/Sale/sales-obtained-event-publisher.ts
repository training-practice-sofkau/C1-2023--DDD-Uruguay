import { EventPublisherBase } from "src/libs";
import { SaleDomainEntity } from "../../../entities/Sale-domain/sale-domain-entity";

export class SalesObtainedEventPublisher <
Response = SaleDomainEntity
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'sale-sales-get-successfull',
            JSON.stringify({ data: this.response })
        )
}
}

import { EventPublisherBase } from 'src/libs';
import { SaleDomainEntity } from '../../../entities/Sale-domain/sale-domain-entity';
export class AddedSaleEventPublisher <
Response = SaleDomainEntity
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'event-publish',
            JSON.stringify({ data: this.response })
        )
}
}


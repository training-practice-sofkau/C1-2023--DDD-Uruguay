import { EventPublisherBase } from 'src/libs';
import { ClientDomainBase } from '../../../../entities/Order-domain/client-domain-entity';
export class NameModifiedEventPublisher  <
Response = ClientDomainBase
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'order-name-modified-successfully',
            JSON.stringify({ data: this.response })
        )
}
}
import { EventPublisherBase } from 'src/libs';
import { ClientDomainBase } from '../../../entities/Order-domain/client-domain-entity';
export class ClientModifiedEventPublisher<
Response = ClientDomainBase
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'order-client-modified-successfull',
            JSON.stringify({ data: this.response })
        )
}
}

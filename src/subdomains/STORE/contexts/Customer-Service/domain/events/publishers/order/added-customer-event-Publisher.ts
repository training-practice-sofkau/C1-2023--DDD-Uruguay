import { EventPublisherBase } from "src/libs";
import { ClientDomainBase } from '../../../entities/Order-domain/client-domain-entity';

export class ClientAddEventPublisher  <
Response = ClientDomainBase
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'order-added-modified-successfull',
            JSON.stringify({ data: this.response })
        )
}

}
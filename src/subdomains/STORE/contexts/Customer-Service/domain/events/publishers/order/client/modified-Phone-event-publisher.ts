import { EventPublisherBase } from "src/libs";
import { ClientDomainBase } from "../../../../entities/Order-domain/client-domain-entity";

export class PhoneModifiedEventPublisher <
Response = ClientDomainBase
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'order-publish-event',
            JSON.stringify({ data: this.response })
        )
}
}
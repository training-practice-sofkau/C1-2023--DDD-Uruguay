import { EventPublisherBase } from "src/libs";
import { ClientDomainBase } from "../../../entities/Order-domain/client-domain-entity";

export class ClientObtainedEventPublisher <
Response = ClientDomainBase
>   extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'event-publish',
            JSON.stringify({ data: this.response })
        )
}
}

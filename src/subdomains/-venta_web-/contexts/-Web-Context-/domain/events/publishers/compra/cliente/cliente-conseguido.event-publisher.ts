import { EventPublisherBase } from "src/libs";
import { ClienteDomainEntity } from "../../../../entities";

export class ClienteConseguidoEventPublisher<Response = ClienteDomainEntity> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {     
        return this.emit('web-context.cliente-conseguido', JSON.stringify({ data: this.response }))
    }
}
import { EventPublisherBase } from "src/libs";
import { ClienteDomainEntity } from "../../../../entities";

export class CuponConseguidoEventPublisher<Response = ClienteDomainEntity> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit('web-context.cupon-conseguido', JSON.stringify({ data: this.response }))
    }

}
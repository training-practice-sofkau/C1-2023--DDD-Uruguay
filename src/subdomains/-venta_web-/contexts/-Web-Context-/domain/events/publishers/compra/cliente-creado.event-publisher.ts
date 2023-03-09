import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";
import { ClienteDomainEntity } from "../../../entities/common-entities/cliente.domain-entity";


export abstract class ClienteCreadoEventPublisher<Response = ClienteDomainEntity> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'web-context.cliente-creado',
            JSON.stringify({ data: this.response })
        )
    }

}
import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";

export abstract class ClienteCreadoEventPublisher<Response = string> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'web-context.cliente-creado',
            JSON.stringify({ data: this.response })
        )
    }

}
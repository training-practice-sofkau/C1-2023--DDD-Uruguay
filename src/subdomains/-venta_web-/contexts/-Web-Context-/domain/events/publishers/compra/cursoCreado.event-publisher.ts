import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";


export abstract class CursoCreadoEventPublisher<Response = string> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'Se creo un nuevo curso!',
            JSON.stringify({ data: this.response })
        )
    }

}
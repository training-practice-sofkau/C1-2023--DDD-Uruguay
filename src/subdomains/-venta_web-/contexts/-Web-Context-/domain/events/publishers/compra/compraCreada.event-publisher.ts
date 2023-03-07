import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";


export abstract class CompraCreadaEventPublisher<Response = string> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'Se creo una nueva compra!',
            JSON.stringify({ data: this.response })
        )
    }

}
import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";


export abstract class UpdatePorcentajeEventPublisher<Response = number> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'web-context.update-porcentaje',
            JSON.stringify({ data: this.response })
        )
    }

}
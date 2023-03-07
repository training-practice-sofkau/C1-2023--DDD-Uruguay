import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";


export abstract class UpdatePorcentajeEventPublisher<Response = string> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'El porcentaje del cupón fue actualizado!',
            JSON.stringify({ data: this.response })
        )
    }

}
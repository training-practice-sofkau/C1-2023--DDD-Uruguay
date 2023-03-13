
import { EventPublisherBase } from "src/libs";

export abstract class TamanioPostreCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.tamaño-postre-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
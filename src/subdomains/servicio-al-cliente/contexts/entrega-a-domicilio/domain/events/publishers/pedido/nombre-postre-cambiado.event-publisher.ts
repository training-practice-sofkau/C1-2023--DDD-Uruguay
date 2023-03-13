
import { EventPublisherBase } from "src/libs";

export abstract class NombrePostreCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.nombre-postre-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
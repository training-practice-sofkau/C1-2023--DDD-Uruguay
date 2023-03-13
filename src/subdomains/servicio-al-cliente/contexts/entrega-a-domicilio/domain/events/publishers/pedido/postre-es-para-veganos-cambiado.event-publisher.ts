
import { EventPublisherBase } from "src/libs";

export abstract class PostreEsParaVeganosCambiadoEventPublisherBase<
    Response = boolean
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.postre-es-para-veganos-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
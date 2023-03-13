
import { EventPublisherBase } from "src/libs";

export abstract class PrecioPedidoCambiadoEventPublisherBase<
    Response = number
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.precio-pedido-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
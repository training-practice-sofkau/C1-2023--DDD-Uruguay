
import { EventPublisherBase } from "src/libs";

export abstract class EstadoPedidoCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.estado-pedido-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}

import { EventPublisherBase } from "src/libs";

export abstract class PedidoAgregadoEventPublisherBase<
    Response = PedidoDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.pedido-agregado',
            JSON.stringify({ data: this.response })
        )
    }
}

import { EventPublisherBase } from "src/libs";

export abstract class PedidoAgregadoEventPublisherBase<
    Response = PedidoDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.pedido-agregado',
            JSON.stringify({ data: this.response })
        )
    }
}

import { EventPublisherBase } from "src/libs";

export abstract class EstadoPedidoCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.estado-pedido-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
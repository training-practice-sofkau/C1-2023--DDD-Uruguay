
import { EventPublisherBase } from "src/libs";

export abstract class PrecioPedidoCambiadoEventPublisherBase<
    Response = number
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.precio-pedido-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
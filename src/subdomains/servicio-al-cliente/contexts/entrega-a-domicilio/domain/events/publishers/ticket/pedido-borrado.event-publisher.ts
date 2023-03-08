
import { EventPublisherBase } from "src/libs";

export abstract class PedidoBorradoEventPublisherBase<
    Response = void
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.pedido-borrado',
            JSON.stringify({ data: this.response })
        )
    }
}
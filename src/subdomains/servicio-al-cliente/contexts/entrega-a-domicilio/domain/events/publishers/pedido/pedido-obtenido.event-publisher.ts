
import { EventPublisherBase } from "src/libs";
import { PedidoDomainEntityBase } from "../../../entities";


export abstract class PedidoObtenidoEventPublisherBase<
    Response = PedidoDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.pedido-obtenido',
            JSON.stringify({ data: this.response })
        )
    }
}
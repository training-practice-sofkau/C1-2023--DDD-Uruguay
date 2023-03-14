
import { EventPublisherBase } from "src/libs";
import { TicketDomainEntityBase } from "../../../entities/ticket";

export abstract class PedidoAgregadoEventPublisherBase<
    Response = TicketDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.pedido-agregado',
            JSON.stringify({ data: this.response })
        )
    }
}
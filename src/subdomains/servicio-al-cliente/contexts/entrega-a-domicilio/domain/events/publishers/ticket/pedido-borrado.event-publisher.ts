
import { EventPublisherBase } from "src/libs";
import { TicketDomainEntityBase } from "../../../entities/ticket";

export abstract class PedidoBorradoEventPublisherBase<
    Response = TicketDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.pedido-borrado',
            JSON.stringify({ data: this.response })
        )
    }
}

import { EventPublisherBase } from "src/libs";
import { PedidoDomainEntityBase } from "../../../entities";


export abstract class PedidoCreadoEventPublisherBase<
    Response = PedidoDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.pedido-creada',
            JSON.stringify({ data: this.response })
        )
    }
}

import { EventPublisherBase } from "src/libs";
import { ClienteDomainEntityBase } from "../../../entities";


export abstract class ClienteCreadoEventPublisherBase<
    Response = ClienteDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.cliente-creado',
            JSON.stringify({ data: this.response })
        )
    }
}
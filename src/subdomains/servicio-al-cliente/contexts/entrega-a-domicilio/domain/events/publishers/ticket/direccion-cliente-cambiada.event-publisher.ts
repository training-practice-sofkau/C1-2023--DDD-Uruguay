
import { EventPublisherBase } from "src/libs";
import { ClienteDomainEntityBase } from "../../../entities";


export abstract class DireccionClienteCambiadaEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.direccion-cliente-cambiada',
            JSON.stringify({ data: this.response })
        )
    }
}
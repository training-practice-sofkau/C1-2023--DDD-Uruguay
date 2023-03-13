
import { EventPublisherBase } from "src/libs";
import { RepartidorDomainEntityBase } from "../../../entities";


export abstract class RepartidorCreadoEventPublisherBase<
    Response = RepartidorDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.repartidor-creado',
            JSON.stringify({ data: this.response })
        )
    }
}
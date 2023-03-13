
import { EventPublisherBase } from "src/libs";
import { BebidaDomainEntityBase } from "../../../entities";


export abstract class BebidaObtenidaEventPublisherBase<
    Response = BebidaDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.bebida-obtenida',
            JSON.stringify({ data: this.response })
        )
    }
}

import { EventPublisherBase } from "src/libs";
import { PlatoPrincipalDomainEntityBase } from "../../../entities";


export abstract class PlatoPrincipalCreadoEventPublisherBase<
    Response = PlatoPrincipalDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.plato-principal-creado',
            JSON.stringify({ data: this.response })
        )
    }
}
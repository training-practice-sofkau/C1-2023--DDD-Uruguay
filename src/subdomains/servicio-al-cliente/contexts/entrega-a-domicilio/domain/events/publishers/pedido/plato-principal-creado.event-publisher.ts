
import { EventPublisherBase } from "src/libs";
import { PlatoPrincipalDomainEntityBase } from "../../../entities";


export abstract class PlatoPrincipalCreadoEventPublisherBase<
    Response = PlatoPrincipalDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.plato-principal-creada',
            JSON.stringify({ data: this.response })
        )
    }
}
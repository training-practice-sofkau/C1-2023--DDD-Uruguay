
import { EventPublisherBase } from "src/libs";
import { PostreDomainEntityBase } from "../../../entities";


export abstract class PostreCreadoEventPublisherBase<
    Response = PostreDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.postre-creado',
            JSON.stringify({ data: this.response })
        )
    }
}
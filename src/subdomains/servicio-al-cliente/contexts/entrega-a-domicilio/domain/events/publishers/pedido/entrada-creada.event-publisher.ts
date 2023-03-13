
import { EventPublisherBase } from "src/libs";
import { EntradaDomainEntityBase } from "../../../entities";


export abstract class EntradaCreadaEventPublisherBase<
    Response = EntradaDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.entrada-creada',
            JSON.stringify({ data: this.response })
        )
    }
}
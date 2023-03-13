
import { EventPublisherBase } from "src/libs";

export abstract class GuarnicionPlatoPrincipalCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.guarnicion-plato-principal-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
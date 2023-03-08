
import { EventPublisherBase } from "src/libs";

export abstract class NombreClienteCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.nombre-cliente-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
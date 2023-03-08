
import { EventPublisherBase } from "src/libs";

export abstract class NombreBebidaCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.nombre-bebida-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
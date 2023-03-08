
import { EventPublisherBase } from "src/libs";

export abstract class NombreRepartidorCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.nombre-repartidor-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
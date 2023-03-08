
import { EventPublisherBase } from "src/libs";

export abstract class VehiculoRepartidorCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.vehiculo-repartidor-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
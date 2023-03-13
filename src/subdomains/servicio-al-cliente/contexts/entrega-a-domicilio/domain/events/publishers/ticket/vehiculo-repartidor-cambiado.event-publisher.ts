
import { EventPublisherBase } from "src/libs";

export abstract class VehiculoRepartidorCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.vehiculo-repartidor-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
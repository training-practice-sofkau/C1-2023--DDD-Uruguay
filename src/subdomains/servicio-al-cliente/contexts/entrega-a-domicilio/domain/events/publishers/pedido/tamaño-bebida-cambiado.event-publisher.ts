
import { EventPublisherBase } from "src/libs";

export abstract class TamanioBebidaCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.tamaño-bebida-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
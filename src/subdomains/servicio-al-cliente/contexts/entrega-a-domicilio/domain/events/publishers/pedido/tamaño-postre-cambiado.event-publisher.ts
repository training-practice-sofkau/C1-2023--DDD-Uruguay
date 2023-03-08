
import { EventPublisherBase } from "src/libs";

export abstract class TamanioPostreCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.tamaño-postre-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}
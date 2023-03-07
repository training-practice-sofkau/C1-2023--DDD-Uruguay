import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";

export abstract class UpdateCostoPlanEventPublisher<Response = string> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'El costo del plan fue actualizado!',
            JSON.stringify({ data: this.response })
        )
    }

}
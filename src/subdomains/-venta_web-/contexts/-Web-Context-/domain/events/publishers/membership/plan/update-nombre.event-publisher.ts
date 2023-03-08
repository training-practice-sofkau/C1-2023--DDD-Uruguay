import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";

export abstract class UpdateNombrePlanEventPublisher<Response = string> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'El nombre del Plan fue actualizado!',
            JSON.stringify({ data: this.response })
        )
    }

}
import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";

export abstract class PlanCreadoEventPublisher<Response = string> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'Un nuevo Plan fue creado!',
            JSON.stringify({ data: this.response })
        )
    }

}
import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";


export abstract class UpdateCostoCursoEventPublisher<Response = number> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'web-context.update-costo',
            JSON.stringify({ data: this.response })
        )
    }

}
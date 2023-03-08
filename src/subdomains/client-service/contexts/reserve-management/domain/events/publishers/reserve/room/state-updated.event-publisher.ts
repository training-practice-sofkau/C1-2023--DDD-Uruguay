import { EventPublisherBase } from "src/libs/sofka";

export abstract class StateUpdatedEventPublisher<
    Response = boolean
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.state-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
import { EventPublisherBase } from "src/libs/sofka";

export abstract class MiniBarUpdatedEventPublisher<
    Response = number
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.mini-bar-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
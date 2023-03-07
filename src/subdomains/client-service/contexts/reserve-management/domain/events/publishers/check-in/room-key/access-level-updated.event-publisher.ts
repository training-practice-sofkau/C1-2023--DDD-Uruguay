import { EventPublisherBase } from "src/libs/sofka";

export abstract class AccessLevelUpdatedEventPublisher<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.access-level-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
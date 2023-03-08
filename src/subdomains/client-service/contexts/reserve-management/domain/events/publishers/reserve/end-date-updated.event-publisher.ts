import { EventPublisherBase } from "src/libs/sofka";

export abstract class EndDateUpdatedEventPublisher<
    Response = Date
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.end-date-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
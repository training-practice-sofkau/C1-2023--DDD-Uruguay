import { EventPublisherBase } from "src/libs/sofka";

export abstract class StartDateUpdatedEventPublisher<
    Response = Date
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.start-date-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
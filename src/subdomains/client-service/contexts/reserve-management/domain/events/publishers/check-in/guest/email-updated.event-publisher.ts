import { EventPublisherBase } from "src/libs/sofka";

export abstract class EmailUpdatedEventPublisher<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.email-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
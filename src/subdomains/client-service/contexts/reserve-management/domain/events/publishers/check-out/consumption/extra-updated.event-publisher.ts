import { EventPublisherBase } from "src/libs/sofka";

export abstract class ExtraUpdatedEventPublisher<
    Response = number
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.extra-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
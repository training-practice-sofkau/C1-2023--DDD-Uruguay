import { EventPublisherBase } from "src/libs/sofka";

export abstract class NumberOfGuestsUpdatedEventPublisher<
    Response = number
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.number-of-guests-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
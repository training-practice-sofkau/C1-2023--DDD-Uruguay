import { EventPublisherBase } from "src/libs/sofka";

export abstract class NumberOfGuestsUpdatedEventPublisher<Response>
    extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.number-of-guests-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
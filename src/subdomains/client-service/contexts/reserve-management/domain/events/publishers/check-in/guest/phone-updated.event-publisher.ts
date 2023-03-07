import { EventPublisherBase } from "src/libs/sofka";

export abstract class PhoneUpdatedEventPublisher<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.phone-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
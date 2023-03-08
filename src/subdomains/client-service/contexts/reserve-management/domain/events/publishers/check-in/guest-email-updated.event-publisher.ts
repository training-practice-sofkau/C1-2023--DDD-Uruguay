import { EventPublisherBase } from "src/libs/sofka";

export abstract class GuestEmailUpdatedEventPublisher<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.guest-email-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
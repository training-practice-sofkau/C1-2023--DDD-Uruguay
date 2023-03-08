import { EventPublisherBase } from "src/libs/sofka";

export abstract class GuestPhoneUpdatedEventPublisher<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.guest-phone-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
import { EventPublisherBase } from "src/libs/sofka";
import { GuestDomainEntity } from "../../../../entities";

export abstract class PhoneUpdatedEventPublisher<
    Response = GuestDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.phone-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
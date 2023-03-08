import { EventPublisherBase } from "src/libs/sofka";
import { GuestDomainEntity } from "../../../entities";

export abstract class GuestAddedEventPublisher<
    Response = GuestDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.guest-added',
            JSON.stringify({ data: this.response })
        )
    }
}
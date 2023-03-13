import { EventPublisherBase } from "src/libs/sofka";
import { GuestDomainEntity } from "../../../entities";

export abstract class GuestObtainedEventPublisher<
    Response = GuestDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.guest-obtained',
            JSON.stringify({ data: this.response })
        )
    }
}
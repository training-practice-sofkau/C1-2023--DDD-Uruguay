import { EventPublisherBase } from "src/libs/sofka";
import { GuestDomainEntity } from "../../../../entities";

export abstract class EmailUpdatedEventPublisher<
    Response = GuestDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.email-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
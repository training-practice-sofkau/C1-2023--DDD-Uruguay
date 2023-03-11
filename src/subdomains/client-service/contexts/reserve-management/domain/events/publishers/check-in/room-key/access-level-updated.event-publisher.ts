import { EventPublisherBase } from "src/libs/sofka";
import { RoomKeyDomainEntity } from "../../../../entities";

export abstract class AccessLevelUpdatedEventPublisher<
    Response = RoomKeyDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.access-level-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
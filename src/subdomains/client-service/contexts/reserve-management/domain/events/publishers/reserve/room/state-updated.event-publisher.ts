import { EventPublisherBase } from "src/libs/sofka";
import { RoomDomainEntity } from "../../../../entities";

export abstract class StateUpdatedEventPublisher<
    Response = RoomDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.state-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
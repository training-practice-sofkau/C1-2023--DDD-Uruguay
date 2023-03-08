import { EventPublisherBase } from "src/libs/sofka";
import { RoomDomainEntity } from "../../../entities";

export abstract class RoomAddedEventPublisher<
    Response = RoomDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.room-added',
            JSON.stringify({ data: this.response })
        )
    }
}
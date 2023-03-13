import { EventPublisherBase } from "src/libs/sofka";
import { RoomDomainEntity } from "../../../entities";

export abstract class RoomObtainedEventPublisher<
    Response = RoomDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.room-obtained',
            JSON.stringify({ data: this.response })
        )
    }
}
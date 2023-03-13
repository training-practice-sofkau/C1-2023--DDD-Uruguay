import { EventPublisherBase } from "src/libs/sofka";
import { RoomKeyDomainEntity } from "../../../entities";

export abstract class RoomKeyObtainedEventPublisher<
    Response = RoomKeyDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.room-key-obtained',
            JSON.stringify({ data: this.response })
        )
    }
}
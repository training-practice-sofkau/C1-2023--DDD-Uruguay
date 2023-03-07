import { EventPublisherBase } from "src/libs/sofka";

export abstract class RoomKeyAccessLevelUpdatedEventPublisher<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.room-key-access-level-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
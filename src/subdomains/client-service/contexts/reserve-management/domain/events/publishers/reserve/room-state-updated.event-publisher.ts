import { EventPublisherBase } from "src/libs/sofka";

export abstract class RoomStateUpdatedEventPublisher<
    Response = boolean
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.room-state-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
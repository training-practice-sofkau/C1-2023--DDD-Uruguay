import { EventPublisherBase } from "src/libs/sofka";

export abstract class RoomStateUpdatedEventPublisher<Response>
    extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.room-state-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
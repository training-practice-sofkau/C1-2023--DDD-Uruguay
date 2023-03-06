import { EventPublisherBase } from "src/libs/sofka";
import { RoomDomainEntity } from "../../../../entities";

export abstract class StateUpdatedEventPublisher<
    Response = boolean
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.state-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
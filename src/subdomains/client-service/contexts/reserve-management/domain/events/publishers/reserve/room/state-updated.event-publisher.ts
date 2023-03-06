import { EventPublisherBase } from "src/libs/sofka";

export abstract class StateUpdatedEventPublisher<Response>
    extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.state-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
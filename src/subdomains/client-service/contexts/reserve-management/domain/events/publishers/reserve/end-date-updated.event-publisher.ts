import { EventPublisherBase } from "src/libs/sofka";

export abstract class EndDateUpdatedEventPublisher<Response>
    extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.end-date-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
import { EventPublisherBase } from "src/libs/sofka";

export abstract class StartDateUpdatedEventPublisher<Response>
    extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.start-date-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
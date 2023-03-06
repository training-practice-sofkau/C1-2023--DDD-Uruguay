import { EventPublisherBase } from "src/libs/sofka";

export abstract class EndaDateUpdatedEventPublisher<Response>
    extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.enda-date-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
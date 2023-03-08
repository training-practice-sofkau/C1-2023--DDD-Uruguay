import { EventPublisherBase } from "src/libs/sofka";

export abstract class ConsumptionMiniBarUpdatedEventPublisher<
    Response = number
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.consumption-mini-bar-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
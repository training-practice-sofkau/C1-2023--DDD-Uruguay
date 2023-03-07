import { EventPublisherBase } from "src/libs/sofka";

export abstract class ConsumptionExtraUpdatedEventPublisher<
    Response = number
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.consumption-extra-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
import { EventPublisherBase } from "src/libs/sofka";

export abstract class CostUpdatedEventPublisher<
    Response = number
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.cost-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
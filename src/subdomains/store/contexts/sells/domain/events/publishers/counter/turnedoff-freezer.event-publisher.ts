import { EventPublisherBase } from "src/libs";

export abstract class CounterTurnedOffFreezerEventPublisherBase<
    Response = boolean
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.freezer-turned-off',
            JSON.stringify({ data: this.response })
        )
    }
}
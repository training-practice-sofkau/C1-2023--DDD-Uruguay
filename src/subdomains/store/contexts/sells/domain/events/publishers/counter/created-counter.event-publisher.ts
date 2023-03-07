import { EventPublisherBase } from "src/libs";
import { CounterDomainEntity } from "../../../entities";

export abstract class CounterCreatedCounterEventPublisherBase<
    Response = CounterDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.counter-created',
            JSON.stringify({ data: this.response })
        )
    }
}
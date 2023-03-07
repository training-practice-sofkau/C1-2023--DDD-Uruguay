import { EventPublisherBase } from "src/libs";
import { CounterDomainEntity } from "../../../entities";

export abstract class CounterTurnedOffFreezerEventPublisherBase<
    Response = CounterDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.freezer-turned-off',
            JSON.stringify({ data: this.response })
        )
    }
}
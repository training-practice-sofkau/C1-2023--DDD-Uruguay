import { EventPublisherBase } from "src/libs";
import { CounterDomainEntity } from "../../../entities";

export abstract class CounterTurnedOnFreezerEventPublisherBase<
    Response = boolean
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'store.freezer-turned-on',
            JSON.stringify({ data: this.response })
        )
    }
}
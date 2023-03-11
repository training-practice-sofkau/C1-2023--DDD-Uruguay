import { EventPublisherBase } from "src/libs/sofka";
import { ConsumptionDomainEntity } from "../../../../entities";

export abstract class MiniBarUpdatedEventPublisher<
    Response = ConsumptionDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.mini-bar-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
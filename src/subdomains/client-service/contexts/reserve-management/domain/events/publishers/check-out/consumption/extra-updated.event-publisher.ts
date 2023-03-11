import { EventPublisherBase } from "src/libs/sofka";
import { ConsumptionDomainEntity } from "../../../../entities";

export abstract class ExtraUpdatedEventPublisher<
    Response = ConsumptionDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.extra-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
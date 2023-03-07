import { EventPublisherBase } from "src/libs/sofka";
import { ConsumptionDomainEntity } from "../../../entities";

export abstract class ConsumptionAddedEventPublisher<
    Response = ConsumptionDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.consumption-added',
            JSON.stringify({ data: this.response })
        )
    }
}
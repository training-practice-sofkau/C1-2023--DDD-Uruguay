import { EventPublisherBase } from "src/libs/sofka";
import { ConsumptionDomainEntity } from "../../../entities";

export abstract class ConsumptionObtainedEventPublisher<
    Response = ConsumptionDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.consumption-obtained',
            JSON.stringify({ data: this.response })
        )
    }
}
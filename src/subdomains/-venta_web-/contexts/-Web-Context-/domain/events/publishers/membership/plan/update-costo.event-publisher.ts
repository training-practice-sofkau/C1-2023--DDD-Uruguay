import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";
import { PlanDomainEntity } from "../../../../entities/membership/plan.domain-entity";

export abstract class UpdateCostoPlanEventPublisher<Response = PlanDomainEntity> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'web-context.update-costo',
            JSON.stringify({ data: this.response })
        )
    }

}
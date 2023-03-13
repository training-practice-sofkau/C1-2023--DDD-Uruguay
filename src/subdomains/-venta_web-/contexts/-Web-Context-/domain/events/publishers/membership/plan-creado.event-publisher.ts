import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";
import { PlanDomainEntity } from "../../../entities/membership/plan.domain-entity";

export abstract class PlanCreadoEventPublisher<Response = PlanDomainEntity> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'web-context.plan-creado',
            JSON.stringify({ data: this.response })
        )
    }

}
import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";
import { PlanDomainEntity } from "../../../entities/membership/plan.domain-entity";

export abstract class PlanCreadoEventPublisher<Response = PlanDomainEntity> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'Un nuevo Plan fue creado!',
            JSON.stringify({ data: this.response })
        )
    }

}
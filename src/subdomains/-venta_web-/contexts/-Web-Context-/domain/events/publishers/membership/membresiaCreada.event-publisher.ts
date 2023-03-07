import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";
import { MembershipDomainEntity } from "../../../entities/membership/membership.domain-entity";

export abstract class MembershipCreadaEventPublisher<Response = MembershipDomainEntity> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'Se creo una nueva Membresia!',
            JSON.stringify({ data: this.response })
        )
    }

}
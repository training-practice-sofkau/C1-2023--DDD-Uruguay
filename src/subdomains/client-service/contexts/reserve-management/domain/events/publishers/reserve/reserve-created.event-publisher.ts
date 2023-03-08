import { EventPublisherBase } from "src/libs/sofka";
import { ReserveDomainEntity } from "../../../entities";

export abstract class ReserveCreatedEventPublisher<
    Response = ReserveDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.reserve-created',
            JSON.stringify({ data: this.response })
        )
    }
}
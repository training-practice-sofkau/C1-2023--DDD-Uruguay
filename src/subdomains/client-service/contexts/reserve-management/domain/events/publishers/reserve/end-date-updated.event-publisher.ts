import { EventPublisherBase } from "src/libs/sofka";
import { ReserveDomainEntity } from "../../../entities";

export abstract class EndDateUpdatedEventPublisher<
    Response = ReserveDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.end-date-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
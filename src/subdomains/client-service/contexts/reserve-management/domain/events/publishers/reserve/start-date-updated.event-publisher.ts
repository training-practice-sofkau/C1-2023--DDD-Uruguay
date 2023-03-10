import { EventPublisherBase } from "src/libs/sofka";
import { ReserveDomainEntity } from "../../../entities";

export abstract class StartDateUpdatedEventPublisher<
    Response = ReserveDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.start-date-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
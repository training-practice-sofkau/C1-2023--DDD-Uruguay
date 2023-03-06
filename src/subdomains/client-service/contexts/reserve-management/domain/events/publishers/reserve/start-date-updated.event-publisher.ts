import { EventPublisherBase } from "src/libs/sofka";
import { ReserveDomainEntity } from "../../../entities";

export abstract class StartDateUpdatedEventPublisher<
    Response = Date
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.start-date-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
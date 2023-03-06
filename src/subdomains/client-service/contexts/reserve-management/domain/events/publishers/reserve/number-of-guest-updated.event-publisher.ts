import { EventPublisherBase } from "src/libs/sofka";
import { ReserveDomainEntity } from "../../../entities";

export abstract class NumberOfGuestsUpdatedEventPublisher<
    Response = number
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.number-of-guests-updated',
            JSON.stringify({ data: this.response })
        )
    }
}
import { EventPublisherBase } from "src/libs/sofka";
import { CheckInDomainEntity } from "../../../entities";

export abstract class CheckInCreatedEventPublisher<
    Response = CheckInDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.check-in-creted',
            JSON.stringify({ data: this.response })
        )
    }
}
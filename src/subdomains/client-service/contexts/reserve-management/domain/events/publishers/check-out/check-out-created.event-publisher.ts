import { EventPublisherBase } from "src/libs/sofka";
import { CheckOutDomainEntity } from "../../../entities";

export abstract class CheckOutCreatedEventPublisher<
    Response = CheckOutDomainEntity
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'reserve-management.check-out-created',
            JSON.stringify({ data: this.response })
        )
    }
}
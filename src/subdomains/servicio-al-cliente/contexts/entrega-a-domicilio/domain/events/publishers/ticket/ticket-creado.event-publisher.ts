
import { EventPublisherBase } from "src/libs";
import { TicketDomainEntityBase } from "../../../entities";


export abstract class TicketCreadoEventPublisherBase<
    Response = TicketDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.ticket-creado',
            JSON.stringify({ data: this.response })
        )
    }
}
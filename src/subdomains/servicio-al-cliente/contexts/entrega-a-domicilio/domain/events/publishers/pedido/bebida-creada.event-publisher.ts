
import { EventPublisherBase } from "src/libs";
import { BebidaDomainEntityBase } from "../../../entities";


export abstract class BebidaCreadaEventPublisherBase<
    Response = BebidaDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.bebida-creada',
            JSON.stringify({ data: this.response })
        )
    }
}
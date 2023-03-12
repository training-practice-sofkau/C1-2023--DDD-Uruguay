import { EventPublisherBase } from "src/libs";
import { TramiteDomainEntity } from "../../../entities";

export class TramiteBuscadoEventPublisher<Response = TramiteDomainEntity>
extends EventPublisherBase<Response>{


publish<Result = any>(): Promise<Result> {
    return this.emit(
        'management_system.registered-order',
        JSON.stringify({ data: this.response })
    )
    }
}


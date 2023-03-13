import { EventPublisherBase } from "src/libs";
import { SecretariaDomainEntity } from "../../../entities/secretaria/secretaria.domain-entity";

export abstract class secretariaCreadaEventPublisher<Response = SecretariaDomainEntity>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'management_system.registered-order',
        JSON.stringify({ data: this.response })
    )
}
}
import { EventPublisherBase } from "src/libs";
import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';

export abstract class CesionNegociadoEventPublisher
<Response = CesionDomainEntity>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'management_system.registered-order',
        JSON.stringify({ data: this.response })
    )
}
}
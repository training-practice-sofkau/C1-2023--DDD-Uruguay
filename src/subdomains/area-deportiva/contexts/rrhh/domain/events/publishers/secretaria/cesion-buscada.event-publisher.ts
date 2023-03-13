import { EventPublisherBase } from "src/libs";
import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';

export abstract class CesionBuscadaEventPublisher
<Response = CesionDomainEntity>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'rrhh.cesion-buscada ',
        JSON.stringify({ data: this.response })
    )
}
}
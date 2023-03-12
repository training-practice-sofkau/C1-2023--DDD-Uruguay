import { EventPublisherBase } from "src/libs";
import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';

export abstract class ContratoBuscadaEventPublisher
<Response = ContratoDomainEntity>
extends EventPublisherBase<Response>{
    
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'rrhh.contrato-buscada ',
            JSON.stringify({ data: this.response })
        )
    }
}
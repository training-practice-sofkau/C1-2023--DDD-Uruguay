import { EventPublisherBase } from "src/libs";
import { NegociacionDomainEntity } from "../../../entities";

export abstract class TipoDeNegociacionModificadoEventPublisher
<Response = NegociacionDomainEntity>
    extends EventPublisherBase<Response>{
        
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.registered-order',
            JSON.stringify({ data: this.response })
        )
    }
}
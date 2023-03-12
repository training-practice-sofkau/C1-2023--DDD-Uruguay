import { EventPublisherBase } from "src/libs";
import { TraspasoDomainEntity } from "../../../entities";

export abstract class TraspasoBuscadaEventPublisher
<Response = TraspasoDomainEntity>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'rrhh.traspaso-buscada ',
        JSON.stringify({ data: this.response })
    )
}
}
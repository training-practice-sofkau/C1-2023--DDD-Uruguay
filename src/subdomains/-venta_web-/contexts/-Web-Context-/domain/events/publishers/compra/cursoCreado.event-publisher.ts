import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";
import { CursoDomainEntity } from "../../../entities/compra/curso.domain-entity";


export abstract class CursoCreadoEventPublisher<Response = CursoDomainEntity> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'Se creo un nuevo curso!',
            JSON.stringify({ data: this.response })
        )
    }

}
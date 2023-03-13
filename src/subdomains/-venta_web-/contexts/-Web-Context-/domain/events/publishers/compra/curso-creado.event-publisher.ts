import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";
import { CursoDomainEntity } from "../../../entities/compra/curso.domain-entity";


export abstract class CursoCreadoEventPublisher<Response = CursoDomainEntity> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'web-context.curso-creado',
            JSON.stringify({ data: this.response })
        )
    }

}
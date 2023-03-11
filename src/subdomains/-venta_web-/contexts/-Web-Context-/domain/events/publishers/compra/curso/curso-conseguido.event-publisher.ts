import { EventPublisherBase } from "src/libs";
import { ClienteDomainEntity, CursoDomainEntity } from "../../../../entities";

export class CursoConseguidoEventPublisher<Response = CursoDomainEntity> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit('web-context.curso-conseguido', JSON.stringify({ data: this.response }))
    }
}
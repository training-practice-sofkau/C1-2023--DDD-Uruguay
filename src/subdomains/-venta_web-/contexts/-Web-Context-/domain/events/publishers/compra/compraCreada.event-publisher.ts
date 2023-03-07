import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";
import { CompraDomainEntity } from "../../../entities/compra/compra.domain-entity";


export abstract class CompraCreadaEventPublisher<Response = CompraDomainEntity> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'Se creo una nueva compra!',
            JSON.stringify({ data: this.response })
        )
    }

}
import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";


export abstract class UpdatePhoneEventPublisher<Response = string> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'Telefono del usuario actualizado!',
            JSON.stringify({ data: this.response })
        )
    }

}



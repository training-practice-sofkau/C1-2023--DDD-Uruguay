import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";

export abstract class MembershipCreadaEventPublisher<Response = string> extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'Se creo una nueva Membresia!',
            JSON.stringify({ data: this.response })
        )
    }

}
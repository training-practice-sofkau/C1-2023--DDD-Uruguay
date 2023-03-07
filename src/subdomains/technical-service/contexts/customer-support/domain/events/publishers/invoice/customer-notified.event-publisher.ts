import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class CustomerNotifiedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'CustomerNotifiedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}

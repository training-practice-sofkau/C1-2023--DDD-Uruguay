import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class ServiceChargeCalculatedEventPublisherBase < Response = number > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'ServiceChargeCalculatedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}
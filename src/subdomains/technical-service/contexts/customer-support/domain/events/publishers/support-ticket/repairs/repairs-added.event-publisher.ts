import { EventPublisherBase } from "../../../../../../../../../libs/sofka/bases";
export abstract class RepairsAddedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.repairs-added',
            JSON.stringify({ data: this.response })
        )
    }
}

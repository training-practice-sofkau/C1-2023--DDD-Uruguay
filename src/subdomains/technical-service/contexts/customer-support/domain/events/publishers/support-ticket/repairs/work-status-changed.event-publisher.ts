import { EventPublisherBase } from "../../../../../../../../../libs/sofka/bases";
export abstract class WorkStatusChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.work-status-changed',
            JSON.stringify({ data: this.response })
        )
    }
}

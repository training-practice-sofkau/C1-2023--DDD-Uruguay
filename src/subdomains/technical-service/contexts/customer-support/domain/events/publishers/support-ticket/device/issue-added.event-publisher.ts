import { EventPublisherBase } from "../../../../../../../../../libs/sofka/bases";
export abstract class IssueAddedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'IssueAddedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}

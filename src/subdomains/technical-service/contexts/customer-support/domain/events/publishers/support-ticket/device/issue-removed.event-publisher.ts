import { EventPublisherBase } from "../../../../../../../../../libs/sofka/bases";
export abstract class IssueRemovedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'IssueRemovedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}

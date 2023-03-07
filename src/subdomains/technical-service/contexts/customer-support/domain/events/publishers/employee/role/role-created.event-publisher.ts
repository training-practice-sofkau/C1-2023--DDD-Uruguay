import { EventPublisherBase } from "../../../../../../../../../libs/sofka/bases";
export abstract class RoleCreatedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'RoleCreatedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}
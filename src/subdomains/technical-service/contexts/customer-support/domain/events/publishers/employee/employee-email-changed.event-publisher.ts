import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class EmployeeEmailChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'EmployeeEmailChangedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}
import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class EmployeeStatusChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'EmployeeStatusChangedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}
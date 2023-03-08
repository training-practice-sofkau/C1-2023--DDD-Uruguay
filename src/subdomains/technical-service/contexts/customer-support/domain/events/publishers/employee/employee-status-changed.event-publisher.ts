import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class EmployeeStatusChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.employee-status-changed',
            JSON.stringify({ data: this.response })
        )
    }
}
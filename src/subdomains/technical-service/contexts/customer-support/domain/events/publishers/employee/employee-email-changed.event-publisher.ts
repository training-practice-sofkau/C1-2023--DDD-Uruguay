import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class EmployeeEmailChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.employee-email-changed',
            JSON.stringify({ data: this.response })
        )
    }
}
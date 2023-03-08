import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class EmployeeCreatedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.employee-created',
            JSON.stringify({ data: this.response })
        )
    }
}
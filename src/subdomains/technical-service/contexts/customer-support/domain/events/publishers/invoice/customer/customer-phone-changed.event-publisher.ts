import { EventPublisherBase } from "../../../../../../../../../libs/sofka/bases";
export abstract class CustomerPhoneChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.customer-phone-changed',
            JSON.stringify({ data: this.response })
        )
    }
}
import { EventPublisherBase } from "../../../../../../../../libs";
import { CustomerDomainEntityBase } from "../../../entities/invoice/customer.domain-entity/customer.domain-entity";


export abstract class CustomerNotificationSentEventPublisherBase < Response = CustomerDomainEntityBase > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'CustomerNotificationSentEventPublisherBase:',
            JSON.stringify({ data: this.response })
        )
    }
}

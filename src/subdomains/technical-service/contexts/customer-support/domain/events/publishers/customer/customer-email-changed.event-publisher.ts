import { EventPublisherBase } from "../../../../../../../../libs";
import { CustomerDomainEntityBase } from "../../../entities/invoice/customer.domain-entity/customer.domain-entity";


export abstract class CustomerEmailChangedEventPublisherBase < Response = CustomerDomainEntityBase > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'CustomerEmailChangedEventPublisher',
            JSON.stringify({ data: this.response })
        )
    }
}
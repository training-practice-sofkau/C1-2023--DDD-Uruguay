import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
import { CustomerDomainEntityBase } from "../../../entities/invoice/customer.domain-entity";
export abstract class CustomerCreatedEventPublisherBase < Response = CustomerDomainEntityBase | null > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.customer-created',
            JSON.stringify({ data: this.response })
        )
    }
}

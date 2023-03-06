import { EventPublisherBase } from "src/libs";
import { CustomerDomainEntityBase } from "../../../entities/invoice/customer.domain-entity/customer.domain-entity";


export abstract class CustomerPhoneChangedEventPublisherBase extends EventPublisherBase<CustomerDomainEntityBase>{

    publish(): void {
        console.log('CustomerPhoneChangedEventPublisherBase: Method not implemented');
    }
}
import { EventPublisherBase } from "src/libs";
import { CustomerDomainEntityBase } from "../../../entities/invoice/customer.domain-entity/customer.domain-entity";


export abstract class CustomerEmailChangedEventPublisherBase extends EventPublisherBase<CustomerDomainEntityBase>{

    publish(): void {
        console.log('CustomerEmailChangedEventPublisherBase: Method not implemented');
    }
}
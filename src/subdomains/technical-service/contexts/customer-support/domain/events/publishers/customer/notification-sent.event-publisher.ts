import { EventPublisherBase } from "src/libs";
import { CustomerDomainEntityBase } from "../../../entities/invoice/customer.domain-entity/customer.domain-entity";

export abstract class CustomerNotificationSentEventPublisherBase extends EventPublisherBase<CustomerDomainEntityBase>{

    publish(): void {
        console.log('CustomerNotificationSentEventPublisherBase: Method not implemented');
    }
}
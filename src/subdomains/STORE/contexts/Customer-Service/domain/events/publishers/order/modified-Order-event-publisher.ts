import { EventPublisherBase } from "src/libs";
import { OrderDomainEntityBase } from "../../../entities/Order-domain/Order-domain-entity";

export class OrderModifiedEventPublisher extends EventPublisherBase <OrderDomainEntityBase> {
    publish(): void {
console.log("orden modificada")    }
}

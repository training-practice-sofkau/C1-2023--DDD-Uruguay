import { EventPublisherBase } from "src/libs";
import { OrderDomainEntityBase } from "../../../entities/Order-domain/Order-domain-entity";

export class DeleteOrderEventPublisher extends EventPublisherBase<OrderDomainEntityBase> {
    publish(): void {
console.log("Cliente borrado")    }
}

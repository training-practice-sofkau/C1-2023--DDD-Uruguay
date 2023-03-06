import { EventPublisherBase } from "src/libs";
import { OrderDomainEntityBase } from "../../../entities/Order-domain/Order-domain-entity";
/**
 *
 *
 * @export
 * @abstract
 * @class OrderAddEventPublisher
 * @extends {EventPublisherBase<OrderDomainEntityBase>}
 */
export abstract class OrderAddEventPublisher  extends EventPublisherBase<OrderDomainEntityBase>{
 
    publish(): void {
        console.log('Ta todo funcionando o  a lo mejor no y este console log nunca se va  a ver ')
    }
}

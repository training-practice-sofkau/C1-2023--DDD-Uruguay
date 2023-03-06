
import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";
import { OrderDomainEntityBase } from "../../entities";

// este metodo va a cambiar
export abstract class RegisteredOrderEventPublisherBase extends EventPublisherBase<OrderDomainEntityBase> {
  
}
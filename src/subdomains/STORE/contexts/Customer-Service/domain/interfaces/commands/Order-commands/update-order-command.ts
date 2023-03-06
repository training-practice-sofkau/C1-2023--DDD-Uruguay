import { OrderDomainEntityBase } from "../../../entities/Order-domain/Order-domain-entity"

export class UpdateOrder {
    OrderId: string
    OrderData: Partial<OrderDomainEntityBase>
}

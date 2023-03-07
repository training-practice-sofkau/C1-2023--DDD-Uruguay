import { OrderDomainEntityBase } from "../../../entities/Order-domain/Order-domain-entity"

export interface UpdateOrder {
    OrderId: string
    OrderData: Partial<OrderDomainEntityBase>
}

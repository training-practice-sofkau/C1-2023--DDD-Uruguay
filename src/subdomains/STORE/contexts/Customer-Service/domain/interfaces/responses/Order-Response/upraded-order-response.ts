import { OrderDomainEntityBase } from '../../../entities/Order-domain/Order-domain-entity';
export class UpradedOrderResponse {
    succes: boolean;
    data: OrderDomainEntityBase | null 
}

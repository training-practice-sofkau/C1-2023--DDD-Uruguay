import { OrderDomainEntityBase } from '../../../entities/Order-domain/Order-domain-entity';
export class RegisterdOrderResponse {
    succes: boolean;
    data: OrderDomainEntityBase | null 
}

import { OrderDomainEntityBase } from '../../../entities';
import { KitDomainEntityBase } from '../../../entities/order';

export interface IUpdateKitCommand {
    domain: OrderDomainEntityBase;
    kit: KitDomainEntityBase;
}
import { OrderDomainEntityBase } from '../../../entities';
import { EmployedNameValueObject } from '../../../value-objects/order';

export interface IUpdateEmployedNameCommand {
    domain: OrderDomainEntityBase;
    name: EmployedNameValueObject;
}
import { OrderDomainEntityBase } from '../../../entities';
import { EmployedPhoneValueObject } from '../../../value-objects/order';

export interface IUpdateEmployedPhoneCommand {
    domain: OrderDomainEntityBase;
    phone: EmployedPhoneValueObject;
}
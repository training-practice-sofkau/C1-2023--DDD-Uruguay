import { OrderDomainEntityBase } from '../../../entities';
import { BenefitedAddressValueObject } from '../../../value-objects/order';

export interface IUpdateBenefitedAddressCommand {
    domain: OrderDomainEntityBase;
    address: BenefitedAddressValueObject;
}
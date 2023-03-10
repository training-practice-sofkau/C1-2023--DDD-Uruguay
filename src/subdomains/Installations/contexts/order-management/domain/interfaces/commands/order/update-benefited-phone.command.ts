import { OrderDomainEntityBase } from '../../../entities';
import { BenefitedPhoneValueObject } from '../../../value-objects/order';

export interface IUpdateBenefitedPhoneCommand {
    domain: OrderDomainEntityBase;
    phone: BenefitedPhoneValueObject;
}
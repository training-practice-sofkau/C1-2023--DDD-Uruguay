import { OrderDomainEntityBase } from '../../../entities';
import { BenefitedNameValueObject } from '../../../value-objects/order';

export interface IUpdateBenefitedNameCommand {
    domain: OrderDomainEntityBase;
    name: BenefitedNameValueObject;
}
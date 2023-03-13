import { BenefitedAddressValueObject } from '../../../value-objects/order';

export interface IUpdateBenefitedAddressCommand {
    orderId: string;
    address: BenefitedAddressValueObject;
}
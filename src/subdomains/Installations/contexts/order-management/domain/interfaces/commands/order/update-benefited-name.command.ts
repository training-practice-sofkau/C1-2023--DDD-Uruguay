import { BenefitedNameValueObject } from '../../../value-objects/order';

export interface IUpdateBenefitedNameCommand {
    orderId: string;
    name: BenefitedNameValueObject;
}
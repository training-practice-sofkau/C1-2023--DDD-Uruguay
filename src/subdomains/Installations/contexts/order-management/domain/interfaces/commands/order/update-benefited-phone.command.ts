import { BenefitedPhoneValueObject } from "../../../value-objects/order";

export interface IUpdateBenefitedPhoneCommand {
  orderId: string;
  phone: BenefitedPhoneValueObject;
}

import { FeeTaxValueObject } from "../../../value-objects/invoice";

export interface IUpdateFeeTaxCommand {
  invoiceId: string;
  tax: FeeTaxValueObject;
}

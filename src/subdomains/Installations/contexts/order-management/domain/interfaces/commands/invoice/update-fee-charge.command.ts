import { FeeChargeValueObject } from "../../../value-objects/invoice";

export interface IUpdateFeeChargeCommand {
  invoiceId: string;
  charge: FeeChargeValueObject;
}

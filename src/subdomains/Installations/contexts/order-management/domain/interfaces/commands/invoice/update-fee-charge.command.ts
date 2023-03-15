import { FeeChargeValueObject } from '../../../value-objects/invoice';

export interface IUpdateFeeChargeCommand {
  feeId: string;
  charge: string | FeeChargeValueObject;
}

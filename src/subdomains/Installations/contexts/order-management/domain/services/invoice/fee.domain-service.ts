import { FeeDomainEntityBase } from '../../entities/invoice';
import {
  FeeChargeValueObject,
  FeeTaxValueObject,
} from '../../value-objects/invoice/fee';

export interface IFeeDomainService<T extends FeeDomainEntityBase = FeeDomainEntityBase> {
  createFee(fee: T): Promise<T>;
  getFee(feeId: string): Promise<T>;
  deleteFee(feeId: string): Promise<boolean>;
  updateFeeCharge(feeId: string, newFeeCharge: FeeChargeValueObject): Promise<T>;
  updateFeeTax(feeId: string, newFeeTax: FeeTaxValueObject): Promise<T>;
}

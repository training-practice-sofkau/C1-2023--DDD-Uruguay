import {
  FeeChargeValueObject,
  FeeIdValueObject,
  FeeTaxValueObject,
} from "../../value-objects/invoice";

export interface IFeeDomainEntity {
  feeId?: string | FeeIdValueObject;
  tax?: number | FeeTaxValueObject;
  charge?: number | FeeChargeValueObject;
  createdAt?: number | Date;
  updatedAt?: number | Date;
  deletedAt?: number | Date;
}

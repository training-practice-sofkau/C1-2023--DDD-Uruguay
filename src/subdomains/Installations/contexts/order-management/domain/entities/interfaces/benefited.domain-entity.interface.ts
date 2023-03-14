import {
  BenefitedAddressValueObject,
  BenefitedCompanyIdValueObject,
  BenefitedIdValueObject,
  BenefitedNameValueObject,
  BenefitedPhoneValueObject,
} from "../../value-objects/order";

export interface IBenefitedDomainEntity {
  benefitedId?: string | BenefitedIdValueObject;
  name?: string | BenefitedNameValueObject;
  phone?: string | BenefitedPhoneValueObject;
  address?: string | BenefitedAddressValueObject;
  companyId?: string | BenefitedCompanyIdValueObject;
  createdAt?: number | Date;
  updatedAt?: number | Date;
  deletedAt?: number | Date;
}

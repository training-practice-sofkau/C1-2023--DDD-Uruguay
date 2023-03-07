import { CompanyIdValueObject } from '../../value-objects';
import { BenefitedAddressValueObject, BenefitedIdValueObject, BenefitedNameValueObject, BenefitedPhoneValueObject, BenefitedCompanyIdValueObject } from '../../value-objects/order';

export interface IBenefitedDomainEntity {
    benefitedId?: string | BenefitedIdValueObject;
    name?: string | BenefitedNameValueObject;
    phone?: string | BenefitedPhoneValueObject;
    address?: string | BenefitedAddressValueObject;
    companyId?: string | BenefitedCompanyIdValueObject | CompanyIdValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}
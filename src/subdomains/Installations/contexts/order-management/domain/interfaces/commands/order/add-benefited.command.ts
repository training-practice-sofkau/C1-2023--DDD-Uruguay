import { CompanyIdValueObject } from '../../../value-objects/invoice';

export interface IAddBenefited {
    benefitedId: string;
    name: string;
    phone: string;
    address: string;
    companyId: string | CompanyIdValueObject;
}
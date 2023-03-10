import { CompanyIdValueObject } from '../../../value-objects/invoice';

export interface IAddBenefitedCommand {
    benefitedId: string;
    name: string;
    phone: string;
    address: string;
    companyId: string | CompanyIdValueObject;
}
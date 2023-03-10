import { BenefitedDomainEntityBase } from '../../../entities/order';
import { CompanyIdValueObject } from '../../../value-objects/invoice';

export interface IUpdateBenefitedCommand {
    benefitedId: string;
    benefited?: BenefitedDomainEntityBase;
    name: string;
    phone: string;
    address: string;
    companyId: string | CompanyIdValueObject;
}
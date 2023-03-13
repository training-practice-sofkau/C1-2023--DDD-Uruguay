import { BenefitedCompanyIdValueObject } from '../../../value-objects/order';

export interface IUpdateBenefitedCompanyIdCommand {
    orderId: string;
    companyId: BenefitedCompanyIdValueObject;
}
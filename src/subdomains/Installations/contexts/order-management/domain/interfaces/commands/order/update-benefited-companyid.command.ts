import { OrderDomainEntityBase } from '../../../entities';
import { BenefitedCompanyIdValueObject } from '../../../value-objects/order';

export interface IUpdateBenefitedCompanyIdCommand {
    domain: OrderDomainEntityBase;
    companyId: BenefitedCompanyIdValueObject;
}
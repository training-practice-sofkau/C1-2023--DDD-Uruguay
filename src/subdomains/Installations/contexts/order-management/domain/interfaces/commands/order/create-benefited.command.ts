import { CompanyIdValueObject } from '../../../value-objects/invoice';

export interface ICreateBenefitedCommand {
  benefitedId: string;
  name: string;
  phone: string;
  address: string;
  companyId: string | CompanyIdValueObject;
}

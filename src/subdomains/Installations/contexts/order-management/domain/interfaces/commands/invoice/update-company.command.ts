import { CompanyDomainEntityBase } from '../../../entities/invoice';

export interface IUpdateCompanyCommand {
    companyId: string;
    company?: CompanyDomainEntityBase;
    name: string;
    bankAccount: string;
}
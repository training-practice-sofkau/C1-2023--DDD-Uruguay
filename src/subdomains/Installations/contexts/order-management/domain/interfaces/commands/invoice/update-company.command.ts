import { CompanyDomainEntityBase } from '../../../entities/invoice';

export interface IUpdateCompany {
    companyId: string;
    company?: CompanyDomainEntityBase;
    name: string;
    bankAccount: string;
}
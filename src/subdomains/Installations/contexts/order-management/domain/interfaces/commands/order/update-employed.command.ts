import { EmployedDomainEntityBase } from '../../../entities/order';

export interface IUpdateEmployed {
    employedId: string;
    employed?: EmployedDomainEntityBase;
    name: string;
    phone: string;
}
import { EmployedDomainEntityBase } from '../../../entities/order';

export interface IUpdateEmployedCommand {
    employedId: string;
    employed?: EmployedDomainEntityBase;
    name: string;
    phone: string;
}
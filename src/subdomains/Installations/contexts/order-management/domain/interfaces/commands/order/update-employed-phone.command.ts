import { EmployedPhoneValueObject } from '../../../value-objects/order';

export interface IUpdateEmployedPhoneCommand {
    orderId: string;
    phone: EmployedPhoneValueObject;
}
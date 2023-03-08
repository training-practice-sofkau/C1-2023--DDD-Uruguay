import { AmountValueObject } from '../../subdomains/technical-service/contexts/customer-support/domain/value-objects/invoice/amount.value-object';
export const IsPositiveNumber = (value: number | AmountValueObject): boolean =>{

    if(value > 0) return true;

    return false;
}
import { TrueFalseValueObject } from '../../subdomains/technical-service/contexts/customer-support/domain/value-objects/common/true-false/true-false.value-object';
export const IsBoolean = (value: boolean | TrueFalseValueObject): boolean => {

    if(typeof(value) == 'boolean')
    {
        return true
    }

    return false;
}
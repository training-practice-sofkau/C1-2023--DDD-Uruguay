import { FullnameValueObject } from '../../subdomains/technical-service/contexts/customer-support/domain/value-objects/common/fullname/fullname.value-object';
export const IsValidFullname = (value: string | FullnameValueObject): boolean => {

    let onlyLetters = /^[a-zA-Z]+$/;

    const dataToEvaluate = value as string;
    
    //checks if first char is a letter
    if (onlyLetters.test(dataToEvaluate.charAt(0))) {
        return true;
    }
    return false;
}
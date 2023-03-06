import { EmailValueObject } from '../../subdomains/technical-service/contexts/customer-support/domain/value-objects/common/email/email.value-object';

export const IsEmail = (value: string | EmailValueObject): boolean => {

    const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i;

    const dataToEvaluate = value as string;

    const matches = dataToEvaluate.match(regex);

    return matches != null ? true : false;

}
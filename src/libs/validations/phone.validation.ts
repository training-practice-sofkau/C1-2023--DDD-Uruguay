import { PhoneValueObject } from '../../subdomains/technical-service/contexts/customer-support/domain/value-objects/common/phone/phone.value-object';

export const IsPhoneNumber = (value: string | PhoneValueObject): boolean => {

    const regex = /^\[0-9]{12}$/;

    const dataToEvaluate = value as string;

    const matches = dataToEvaluate.match(regex);

    return matches != null ? true : false;

}
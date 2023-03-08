import { UUIDValueObject } from '../../subdomains/technical-service/contexts/customer-support/domain/value-objects/common/uuid/uuid.value-object';

export const IsUUID = (value: string | UUIDValueObject): boolean => {


    const regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    
    const dataToEvaluate = value as string;

    const matches = dataToEvaluate.match(regex);

    return matches != null ? true : false;

}
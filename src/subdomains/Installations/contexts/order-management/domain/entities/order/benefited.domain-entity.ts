import { v4 as uuidv4 } from 'uuid';

import { IBenefitedDomainEntity } from "../interfaces";
import { BenefitedAddressValueObject, BenefitedIdValueObject, BenefitedNameValueObject, BenefitedPhoneValueObject, BenefitedCompanyIdValueObject } from '../../value-objects/order';
import { CompanyIdValueObject } from '../../value-objects/invoice';

export class BenefitedDomainEntityBase implements IBenefitedDomainEntity {

    benefitedId?: string | BenefitedIdValueObject;
    name?: string | BenefitedNameValueObject;
    phone?: string | BenefitedPhoneValueObject;
    address?: string | BenefitedAddressValueObject;
    companyId?: string | BenefitedCompanyIdValueObject | CompanyIdValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor( _data?: IBenefitedDomainEntity ){
        if(_data?.benefitedId) this.benefitedId = _data.benefitedId;
        else this.benefitedId = uuidv4();

        if(_data?.name) this.name = _data.name;

        if(_data?.phone) this.phone = _data.phone;

        if(_data?.address) this.address = _data.address;

        if(_data?.companyId) this.companyId = _data.companyId;

        this.createdAt = new Date();
    }

}
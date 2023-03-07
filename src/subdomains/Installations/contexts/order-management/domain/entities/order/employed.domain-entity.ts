import { v4 as uuidv4 } from 'uuid';

import { EmployedIdValueObject, EmployedNameValueObject, EmployedPhoneValueObject } from '../../value-objects/order';
import { IEmployedDomainEntity } from "../interfaces";

export class KitDomainEntityBase implements IEmployedDomainEntity {

    employedId?: string | EmployedIdValueObject;
    name?: string | EmployedNameValueObject;
    phone?: string | EmployedPhoneValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor( _data?: IEmployedDomainEntity ){
        if(_data?.employedId) this.employedId = _data.employedId;
        else this.employedId = uuidv4();

        if(_data?.name) this.name = _data.name;

        if(_data?.phone) this.phone = _data.phone;

        this.createdAt = new Date();
    }

}
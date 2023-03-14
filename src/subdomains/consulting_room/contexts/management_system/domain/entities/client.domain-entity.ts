import { v4 as uuidv4 } from 'uuid';
import { ClientIdObjectValue, FullNameValueObject, PhoneObjectValue } from '../value-objects';


import {
    IClientDomainEntity
} from './interfaces';

export class ClientDomainEntitybase
    implements IClientDomainEntity {

    clientId?: string | ClientIdObjectValue;
    fullName?: string | FullNameValueObject;
    phone?: string | PhoneObjectValue;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: IClientDomainEntity) {

        if (_data?.clientId)
            this.clientId = _data.clientId;
        else this.clientId = uuidv4();

        if (_data?.fullName) this.fullName = _data.fullName;

        if (_data?.phone) this.phone = _data.phone;

        this.createdAt = new Date();
    }


}



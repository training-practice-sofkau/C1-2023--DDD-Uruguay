import { v4 as uuid } from "uuid";

import { IsUUID } from 'src/libs/validations';
import { UUIDValueObject, DeviceTypeValueObject, IssueValueObject } from '../../../value-objects';
import { IDeviceDomainEntity } from '../../interfaces/support-ticket/';


export class DeviceDomainEntityBase implements IDeviceDomainEntity {

    deviceID: string | UUIDValueObject;
    deviceType: string | DeviceTypeValueObject;
    issues: IssueValueObject[];
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: IDeviceDomainEntity) {

        if (_data?.deviceID && IsUUID(_data?.deviceID)) this.deviceID = _data.deviceID;
        else this.deviceID = uuid();

        if (_data?.deviceType) this.deviceType = _data.deviceType;

        if (_data?.issues) this.issues = _data.issues;

        this.createdAt = Date.now();
    }
}
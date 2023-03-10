import { UUIDValueObject } from "../../../value-objects/common";
import { DeviceTypeValueObject, IssueValueObject } from '../../../value-objects/device';

export interface IDeviceDomainEntity {

    deviceID?: string | UUIDValueObject;
    deviceType?: string | DeviceTypeValueObject;
    issues?: string[] | IssueValueObject[];
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

}
import { DeviceTypeValueObject, IssueValueObject } from '../../../../value-objects/device';

export interface IAddDeviceCommand{

    deviceType: string;
    issues: string;
}
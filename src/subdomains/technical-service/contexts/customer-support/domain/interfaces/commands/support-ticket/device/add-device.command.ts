import { DeviceTypeValueObject, IssueValueObject } from '../../../../value-objects/device';

export interface IAddDeviceCommand{

    deviceType: DeviceTypeValueObject;
    issues: IssueValueObject[];
}
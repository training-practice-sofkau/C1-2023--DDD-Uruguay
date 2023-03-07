import { IRemoveIssueCommand, IAddDeviceCommand, IAddIssueCommand } from '../../interfaces/commands/support-ticket';

export interface IDeviceDomainService {

    AddDevice(deviceData: IAddDeviceCommand): Promise<boolean>;

    AddIssue(issue: IAddIssueCommand): Promise<boolean>;

    RemoveIssue(issue: IRemoveIssueCommand): Promise<boolean>;
}
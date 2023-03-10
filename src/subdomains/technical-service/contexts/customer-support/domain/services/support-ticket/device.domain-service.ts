import { IDeviceDomainEntity } from '../../entities/interfaces';
import { DeviceDomainEntityBase } from '../../entities/support-ticket/device.domain-entity/device.domain-entity';
import { IRemoveIssueCommand, IAddIssueCommand } from '../../interfaces/commands/support-ticket';

export interface IDeviceDomainService {

    AddDevice(deviceData: DeviceDomainEntityBase): Promise<IDeviceDomainEntity | null>;

    AddIssue(issue: IAddIssueCommand): Promise<boolean>;

    RemoveIssue(issue: IRemoveIssueCommand): Promise<boolean>;
}
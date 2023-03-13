import { IDeviceDomainEntity } from '../../entities/interfaces';
import { DeviceDomainEntityBase } from '../../entities/support-ticket/device.domain-entity/device.domain-entity';

export interface IDeviceDomainService {

    AddDevice(deviceData: DeviceDomainEntityBase): Promise<IDeviceDomainEntity | null>;
    
}
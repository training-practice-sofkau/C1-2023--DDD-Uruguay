import { Injectable } from '@nestjs/common';
import { IDeviceDomainEntity } from 'src/subdomains/technical-service/contexts/customer-support/domain/entities/interfaces';
import { DeviceDomainEntityBase } from 'src/subdomains/technical-service/contexts/customer-support/domain/entities/support-ticket';
import { IAddIssueCommand, IRemoveIssueCommand } from 'src/subdomains/technical-service/contexts/customer-support/domain/interfaces';
import { IDeviceDomainService } from '../../../../../domain/services/support-ticket/device.domain-service';

@Injectable()
export class DeviceMySqlService implements IDeviceDomainService{

    constructor(
        private readonly deviceRepository: DeviceRepository
    ){}


    AddDevice(deviceData: DeviceDomainEntityBase): Promise<IDeviceDomainEntity> {
        throw new Error('Method not implemented.');
    }
    
}
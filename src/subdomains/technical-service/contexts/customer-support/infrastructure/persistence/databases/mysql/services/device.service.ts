import { Injectable } from '@nestjs/common';
import { IDeviceDomainEntity } from 'src/subdomains/technical-service/contexts/customer-support/domain/entities/interfaces';
import { DeviceDomainEntityBase } from 'src/subdomains/technical-service/contexts/customer-support/domain/entities/support-ticket';
import { IDeviceDomainService } from '../../../../../domain/services/support-ticket/device.domain-service';
import { DeviceRepository } from '../repositories/device.repository';

@Injectable()
export class DeviceMySqlService implements IDeviceDomainService{

    constructor(
        private readonly deviceRepository: DeviceRepository
    ){}

//TODO: implementar metodos
    AddDevice(deviceData: DeviceDomainEntityBase): Promise<IDeviceDomainEntity> {
        throw new Error('Method not implemented.');
    }
    
}
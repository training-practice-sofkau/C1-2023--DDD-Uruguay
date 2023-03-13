import { Injectable } from '@nestjs/common';
import { IDeviceDomainEntity } from '../../../../../domain/entities/interfaces';
import { DeviceDomainEntityBase } from '../../../../../domain/entities/support-ticket';
import { IDeviceDomainService } from '../../../../../domain/services/support-ticket/device.domain-service';
import { DeviceRepository } from '../repositories/device.repository';

@Injectable()
export class DeviceMySqlService implements IDeviceDomainService{

    constructor(
        private readonly deviceRepository: DeviceRepository
    ){}

    /**
     * Add a new Device entity on the DB
     *
     * @param {DeviceDomainEntityBase} deviceData
     * @return {*}  {Promise<IDeviceDomainEntity>}
     * @memberof DeviceMySqlService
     */
    AddDevice(deviceData: DeviceDomainEntityBase): Promise<IDeviceDomainEntity> {

        return this.deviceRepository.create(deviceData);    

    }
    
}
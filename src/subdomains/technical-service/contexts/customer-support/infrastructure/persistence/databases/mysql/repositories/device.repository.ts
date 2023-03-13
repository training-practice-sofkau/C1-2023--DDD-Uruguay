import { Injectable } from '@nestjs/common';
import { IRepository } from './base/repository.base';
import { DeviceMySqlEntity } from '../entities/device.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceRepository
    implements IRepository<DeviceMySqlEntity> {

        constructor(
            @InjectRepository(DeviceMySqlEntity)
            private readonly repository: Repository<DeviceMySqlEntity>
        ){}

        //TODO: implementar metodos

    findAll(): Promise<DeviceMySqlEntity[]> {
        throw new Error('Method not implemented.');
    }
    findById(id: string): Promise<DeviceMySqlEntity> {
        throw new Error('Method not implemented.');
    }
    create(entity: DeviceMySqlEntity): Promise<DeviceMySqlEntity> {
        throw new Error('Method not implemented.');
    }
    update(id: string, entity: DeviceMySqlEntity): Promise<DeviceMySqlEntity> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }


        
    }
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from '../base/repository.base';
import { RepartidorMySqlEntity } from '../../entities/ticket';

@Injectable()
export class RepartidorMySqlRepository
    implements IRepository<RepartidorMySqlEntity>{

    constructor(
        @InjectRepository(RepartidorMySqlEntity)
        private readonly repository: Repository<RepartidorMySqlEntity>
    ) { }


    async findAll(): Promise<RepartidorMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(repartidorId: string): Promise<RepartidorMySqlEntity> {
        const repartidor = await this.repository.findOneBy({ repartidorId })
        if (!repartidor) throw new BadRequestException(`No se encontró un repartidor con el id: ${repartidorId}`)
        return repartidor;
    }

    async create(entity: RepartidorMySqlEntity): Promise<RepartidorMySqlEntity> {
        return await this.repository.save(entity)
    }
    
    async updateNombre(repartidorId: string, nombre: string): Promise<string> {
        const repartidor = await this.repository.findOneBy({ repartidorId })
        if (!repartidor) throw new BadRequestException(`No se encontró un repartidor con el id: ${repartidorId}`)
        repartidor.nombre = nombre;
        await this.repository.save(repartidor);
        return nombre;
    }

    async updateVehiculo(repartidorId: string, vehiculo: string): Promise<string> {
        const repartidor = await this.repository.findOneBy({ repartidorId })
        if (!repartidor) throw new BadRequestException(`No se encontró un repartidor con el id: ${repartidorId}`)
        repartidor.vehiculo = vehiculo;
        await this.repository.save(repartidor);
        return vehiculo;
    }

    async delete(repartidorId: string): Promise<boolean> {
        const repartidor = await this.repository.findOneBy({ repartidorId });
        if (!repartidor) throw new BadRequestException(`No se encontró un repartidor con el id: ${repartidorId}`)
        await this.repository.remove(repartidor);
        return true;
    }

}
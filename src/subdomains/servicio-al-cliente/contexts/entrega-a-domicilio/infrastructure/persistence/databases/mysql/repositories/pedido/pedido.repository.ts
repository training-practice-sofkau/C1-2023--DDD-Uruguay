import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from '../base/repository.base';
import { PedidoMySqlEntity } from '../../entities/pedido';

@Injectable()
export class PedidoMySqlRepository
    implements IRepository<PedidoMySqlEntity>{

    constructor(
        @InjectRepository(PedidoMySqlEntity)
        private readonly repository: Repository<PedidoMySqlEntity>
    ) { }


    async findAll(): Promise<PedidoMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(pedidoId: string): Promise<PedidoMySqlEntity> {
        const pedido = await this.repository.findOneBy({ pedidoId })
        if (!pedido) throw new BadRequestException(`No se encontró un pedido con el id: ${pedidoId}`)
        return pedido;
    }

    async create(entity: PedidoMySqlEntity): Promise<PedidoMySqlEntity> {
        return await this.repository.save(entity)
    }
    
    async updateEstado(pedidoId: string, estado: string): Promise<string> {
        const pedido = await this.repository.findOneBy({ pedidoId })
        if (!pedido) throw new BadRequestException(`No se encontró un pedido con el id: ${pedidoId}`)
        pedido.estado = estado;
        await this.repository.save(pedido);
        return estado;
    }

    async updatePrecio(pedidoId: string, precio: number): Promise<number> {
        const pedido = await this.repository.findOneBy({ pedidoId })
        if (!pedido) throw new BadRequestException(`No se encontró un pedido con el id: ${pedidoId}`)
        pedido.precio = precio;
        await this.repository.save(pedido);
        return precio;
    }

    async delete(pedidoId: string): Promise<boolean> {
        const pedido = await this.repository.findOneBy({ pedidoId });
        if (!pedido) throw new BadRequestException(`No se encontró un pedido con el id: ${pedidoId}`)
        await this.repository.remove(pedido);
        return true;
    }

}
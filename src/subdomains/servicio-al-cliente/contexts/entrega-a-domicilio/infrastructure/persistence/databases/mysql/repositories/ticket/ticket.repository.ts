import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IRepository } from '../base/repository.base';
import { TicketMySqlEntity, PedidoMySqlEntity } from '../../entities';
import { PedidoMySqlService } from '../../services';

@Injectable()
export class TicketMySqlRepository
    implements IRepository<TicketMySqlEntity>{

    constructor(
        @InjectRepository(TicketMySqlEntity)
        private readonly repository: Repository<TicketMySqlEntity>,
        private readonly pedidoService: PedidoMySqlService
    ) { }


    async findAll(): Promise<TicketMySqlEntity[]> {
        return await this.repository.find();
    }

    async findById(ticketId: string): Promise<TicketMySqlEntity> {
        const ticket = await this.repository.findOneBy({ ticketId })
        if (!ticket) throw new BadRequestException(`No se encontró un ticket con el id: ${ticketId}`)
        return ticket;
    }

    async create(entity: TicketMySqlEntity): Promise<TicketMySqlEntity> {
        return await this.repository.save(entity)
    }

    async addPedido(ticketId: string, pedidoId: string): Promise<TicketMySqlEntity> {
        const ticket = await this.repository.findOneBy({ ticketId })
        if (!ticket) throw new BadRequestException(`No se encontró un ticket con el id: ${ticketId}`)

        const pedido = await this.pedidoService.obtenerPedido(pedidoId)
        if (!ticket) throw new BadRequestException(`No se encontró un pedido con el id: ${ticketId}`)

        ticket.listaPedidos.push(pedido);

        return await this.repository.save(ticket);
    }

    async delete(ticketId: string): Promise<boolean> {
        const ticket = await this.repository.findOneBy({ ticketId });
        if (!ticket) throw new BadRequestException(`No se encontró un ticket con el id: ${ticketId}`)
        await this.repository.remove(ticket);
        return true;
    }

    async deletePedido(ticketId: string, pedidoId: string): Promise<TicketMySqlEntity> {
        const ticket = await this.repository.findOneBy({ ticketId });
        if (!ticket) throw new BadRequestException(`No se encontró un ticket con el id: ${ticketId}`);

        const pedido = await this.pedidoService.obtenerPedido(pedidoId);
        if (!ticket) throw new BadRequestException(`No se encontró un pedido con el id: ${ticketId}`);

        const indexPedido = ticket.listaPedidos.findIndex((p) => p === pedido);
        if (indexPedido === -1) throw new BadRequestException(`No se encontró ese pedido en la lista`);

        ticket.listaPedidos.splice(indexPedido);

        return await this.repository.save(ticket);
    }

}
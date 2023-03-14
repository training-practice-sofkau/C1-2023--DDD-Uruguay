import { Injectable } from "@nestjs/common";

import { ClienteMySqlEntity, RepartidorMySqlEntity } from "../../entities/ticket";
import { ITicketDomainService } from "../../../../../../domain/services";
import { TicketMySqlEntity } from "../../entities/ticket";
import { TicketMySqlRepository } from '../../repositories/ticket';
import { ClienteMySqlService, RepartidorMySqlService } from ".";
import { PedidoDomainEntityBase } from "src/subdomains/servicio-al-cliente/contexts/entrega-a-domicilio/domain";

@Injectable()
export class TicketMySqlService
    implements ITicketDomainService<TicketMySqlEntity> {

    constructor(
        private readonly ticketRepository: TicketMySqlRepository,
        private readonly clienteService: ClienteMySqlService,
        private readonly repartidorService: RepartidorMySqlService
    ) { }


    agregarPedido(ticketId: string, pedidoId: string): Promise<TicketMySqlEntity> {
        return this.ticketRepository.addPedido(ticketId, pedidoId);
    }
    
    borrarPedido(ticketId: string, pedidoId: string): Promise<TicketMySqlEntity> {
        return this.ticketRepository.deletePedido(ticketId, pedidoId);
    }


    crearTicket(ticket: TicketMySqlEntity): Promise<TicketMySqlEntity> {
        return this.ticketRepository.create(ticket);
    }
    
    obtenerTicket(ticketId: string): Promise<TicketMySqlEntity> {
        return this.ticketRepository.findById(ticketId);
    }

    crearCliente(cliente: ClienteMySqlEntity): Promise<ClienteMySqlEntity> {
        return this.clienteService.crearCliente(cliente);
    }

    cambiarNombreCliente(clienteId: string, nuevoNombre: string): Promise<string> {
        return this.clienteService.cambiarNombre(clienteId, nuevoNombre);
    }

    cambiarDireccionCliente(clienteId: string, nuevaDireccion: string): Promise<string> {
        return this.clienteService.cambiarDireccion(clienteId, nuevaDireccion);
    }

    crearRepartidor(repartidor: RepartidorMySqlEntity): Promise<RepartidorMySqlEntity> {
        return this.repartidorService.crearRepartidor(repartidor);
    }

    cambiarNombreRepartidor(repartidorId: string, nuevoNombre: string): Promise<string> {
        return this.repartidorService.cambiarNombre(repartidorId, nuevoNombre);
    }

    cambiarVehiculoRepartidor(repartidorId: string, nuevoVehiculo: string): Promise<string> {
        return this.repartidorService.cambiarVehiculo(repartidorId, nuevoVehiculo);
    }

}
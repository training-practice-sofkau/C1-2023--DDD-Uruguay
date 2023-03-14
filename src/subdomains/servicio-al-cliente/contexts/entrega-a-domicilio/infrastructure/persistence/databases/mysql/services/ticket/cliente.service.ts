import { Injectable } from "@nestjs/common";

import { IClienteDomainService } from "../../../../../../domain/services";
import { ClienteMySqlEntity } from "../../entities/ticket";
import { ClienteMySqlRepository } from '../../repositories/ticket';

@Injectable()
export class ClienteMySqlService
    implements IClienteDomainService<ClienteMySqlEntity> {

    constructor(
        private readonly clienteRepository: ClienteMySqlRepository,
    ) { }


    crearCliente(cliente: ClienteMySqlEntity): Promise<ClienteMySqlEntity> {
        return this.clienteRepository.create(cliente);
    }

    getCliente(clienteId: string): Promise<ClienteMySqlEntity> {
        return this.clienteRepository.findById(clienteId);
    }

    cambiarNombre(clienteId: string, nuevoNombre: string): Promise<string> {
        return this.clienteRepository.updateNombre(clienteId, nuevoNombre);
    }
    cambiarDireccion(clienteId: string, nuevaDireccion: string): Promise<string> {
        return this.clienteRepository.updateDireccion(clienteId, nuevaDireccion);
    }

}
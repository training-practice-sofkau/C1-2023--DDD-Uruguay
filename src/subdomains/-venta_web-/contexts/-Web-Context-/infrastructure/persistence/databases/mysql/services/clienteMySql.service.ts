import { Injectable } from "@nestjs/common";

import { ClienteRepository } from "../repositories";
import { ClienteDomainEntity, IClienteService, ICompraService, ICreateClienteMethod, IUpdatePhoneMethod } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";
import { ClienteMySqlEntity } from "../entities";




@Injectable()
export class ClienteMySqlService implements IClienteService<ClienteMySqlEntity> {

    constructor(private readonly clienteRepository: ClienteRepository) {

    }
    


    createCliente(cliente: ClienteMySqlEntity): Promise<ClienteMySqlEntity> {
        return this.clienteRepository.create(cliente)
    }
    
    updatePhone(entity: ClienteMySqlEntity): Promise<ClienteMySqlEntity> {  
        return this.clienteRepository.update(entity.idCliente, entity)
    }

    obtenerCliente(client: string): Promise<ClienteDomainEntity> {
        throw new Error("Method not implemented.");
    }

    

    /*
    getClient(idCliente: string): Promise<ClienteMySqlEntity> {
        return this.clienteRepository.findById(idCliente)
    }

    registerClient(cliente: ClienteMySqlEntity): Promise<ClienteMySqlEntity> {
        return this.clienteRepository.create(cliente);
    }

    updateClientName(idCliente: string, entity: ClienteMySqlEntity): Promise<ClienteMySqlEntity> {
        return this.clienteRepository.update(idCliente, entity)
    }

    updateClientPhone(idCliente: string, entity: ClienteMySqlEntity): Promise<ClienteMySqlEntity> {
        return this.clienteRepository.update(idCliente, entity)
    }
    */
    

}
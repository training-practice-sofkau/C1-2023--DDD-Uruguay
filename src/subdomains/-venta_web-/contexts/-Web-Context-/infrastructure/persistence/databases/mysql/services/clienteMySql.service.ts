import { Injectable } from "@nestjs/common";
import { ClienteRepository } from "../repositories";
import { ClienteDomainEntity, IClienteService, ICompraService, ICreateClienteMethod, IUpdatePhoneMethod } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";
import { ClienteMySqlEntity } from "../entities";



@Injectable()
export class ClienteMySqlService implements IClienteService<ClienteMySqlEntity> {


    constructor(private readonly clienteRepository: ClienteRepository) {

    }
    
    //METODOS

    createCliente(cliente: ClienteMySqlEntity): Promise<ClienteMySqlEntity> {
        return this.clienteRepository.create(cliente)
    }
    
    updatePhone(entity: ClienteMySqlEntity): Promise<ClienteMySqlEntity> {  
        return this.clienteRepository.update(entity.idCliente, entity)
    }

    obtenerCliente(idCliente: string): Promise<ClienteDomainEntity> {
        return this.clienteRepository.findById(idCliente)
    }

   

}
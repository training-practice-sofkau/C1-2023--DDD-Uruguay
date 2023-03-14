import { Injectable } from "@nestjs/common";

import { ClienteRepository } from "../repositories";
import { ClienteDomainEntity, CompraDomainEntity, CursoDomainEntity, IClienteService, ICompraService, ICreateClienteMethod, ICreateCompraMethod, ICreateCursoMethod, IUpdatePhoneMethod } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";
import { CompraMySqlEntity } from "../entities/compra.entity";
import { CompraRepository } from "../repositories/compra.repository";




@Injectable()
export class CompraMySqlService implements ICompraService <CompraMySqlEntity> {


    constructor(private readonly compraRepository: CompraRepository ) {}


    createCompra(compra: CompraMySqlEntity): Promise<CompraMySqlEntity> {
        return this.compraRepository.create(compra)
    }


    /*
    createCliente(cliente: ICreateClienteMethod): Promise<ClienteDomainEntity> {
        throw new Error("Method not implemented.");
    }

    createCurso(curso: ICreateCursoMethod): Promise<CursoDomainEntity> {
        throw new Error("Method not implemented.");
    }
    
    updatePhone(entity: ClienteMySqlEntity): Promise<ClienteMySqlEntity> {
        
        const idCliente = entity.idCliente
        return this.clienteRepository.update(idCliente, entity)
    }

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
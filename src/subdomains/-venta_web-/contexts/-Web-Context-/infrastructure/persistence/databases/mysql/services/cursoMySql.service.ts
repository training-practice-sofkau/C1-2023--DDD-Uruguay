import { Injectable } from "@nestjs/common";
import { ClienteRepository } from "../repositories";
import { ClienteDomainEntity, CursoDomainEntity, IClienteService, ICompraService, ICreateClienteMethod, ICreateCursoMethod, ICursoService, IUpdateCostoMethod, IUpdatePhoneMethod } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";
import { CursoMySqlEntity } from "../entities/curso.entity";



@Injectable()
export class CursoMySqlService implements ICursoService<CursoMySqlEntity> {

    constructor(private readonly clienteRepository: ClienteRepository) {
        
    }




    createCurso(curso: ICreateCursoMethod): Promise<CursoDomainEntity> {
        throw new Error("Method not implemented.");
    }

    updateCosto(data: IUpdateCostoMethod): Promise<CursoDomainEntity> {
        throw new Error("Method not implemented.");
    }

    obtnerCurso(course: string): Promise<CursoDomainEntity> {
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
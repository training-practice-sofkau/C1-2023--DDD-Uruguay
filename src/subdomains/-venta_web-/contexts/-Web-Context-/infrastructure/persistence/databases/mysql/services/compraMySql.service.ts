import { Injectable } from "@nestjs/common";
import { ClienteDomainEntity, CompraDomainEntity, CursoDomainEntity, IClienteService, ICompraService, ICreateClienteMethod, ICreateCompraMethod, ICreateCursoMethod, IUpdatePhoneMethod } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";
import { CompraMySqlEntity } from "../entities/compra.entity";
import { CompraRepository } from "../repositories/compra.repository";



@Injectable()
export class CompraMySqlService implements ICompraService <CompraMySqlEntity> {


    constructor(private readonly compraRepository: CompraRepository ) {}


    createCompra(compra: CompraMySqlEntity): Promise<CompraMySqlEntity> {
        return this.compraRepository.create(compra)
    }


}
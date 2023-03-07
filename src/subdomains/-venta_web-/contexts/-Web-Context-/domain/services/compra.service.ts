import { ClienteDomainEntity } from "../entities/common-entities/cliente.domain-entity";
import { CursoDomainEntity } from "../entities/compra/curso.domain-entity";
import { ICreateClienteMethod } from "../interfaces/commands/compra/createCliente.command";
import { ICreateCompraMethod } from "../interfaces/commands/compra/createCompra.command";
import { ICreateCursoMethod } from "../interfaces/commands/compra/createCurso.command";
import { IUpdateClientPhoneMethod } from "../interfaces/commands/compra/updateClientePhone.command";
import { IUpdateCostoCursoPhoneMethod } from "../interfaces/commands/compra/updateCursoCosto.command";
import { IUpdatePorcentajeCuponMethod } from "../interfaces/commands/compra/updatePorcentajeCupon.command";


export interface CompraService <CompraDomainEntity> {

    createCliente(cliente : ICreateClienteMethod) : Promise <ClienteDomainEntity>;
    createCompra(compra : ICreateCompraMethod ) : Promise<CompraDomainEntity>;
    createCurso(curso : ICreateCursoMethod) : Promise<CursoDomainEntity>;
    updateClientePhone(data : IUpdateClientPhoneMethod ) : Promise<number>;
    updateCursoCosto(data : IUpdateCostoCursoPhoneMethod) : Promise<CursoDomainEntity>;
    updatePorcentajeCupon(data :  IUpdatePorcentajeCuponMethod) : Promise<number>;

}

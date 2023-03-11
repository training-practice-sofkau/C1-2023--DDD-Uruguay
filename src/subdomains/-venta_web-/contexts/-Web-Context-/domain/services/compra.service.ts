import { ClienteDomainEntity } from "../entities/common-entities/cliente.domain-entity";
import { CompraDomainEntity } from "../entities/compra/compra.domain-entity";
import { CursoDomainEntity } from "../entities/compra/curso.domain-entity";
import { ICreateClienteMethod } from "../interfaces/commands/compra/createCliente.command";
import { ICreateCompraMethod } from "../interfaces/commands/compra/createCompra.command";
import { ICreateCursoMethod } from "../interfaces/commands/compra/createCurso.command";


export interface ICompraService {

    createCompra(compra : ICreateCompraMethod ) : Promise<CompraDomainEntity>;
    createCliente(cliente : ICreateClienteMethod) : Promise <ClienteDomainEntity>;
    createCurso(curso : ICreateCursoMethod) : Promise<CursoDomainEntity>;

    //METODOS PARA OBTENER LAS ENTIDADES ASOCIADAS AL AGREGADO
    obtenerCliente(client : string) : Promise <ClienteDomainEntity>; //SE LE PASA UN ID?
    obtnerCurso(course : string) : Promise<CursoDomainEntity>;


}

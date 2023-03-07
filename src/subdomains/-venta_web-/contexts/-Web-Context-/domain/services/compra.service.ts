import { ClienteDomainEntity } from "../entities/common-entities/cliente.domain-entity";
import { CursoDomainEntity } from "../entities/compra/curso.domain-entity";


export interface CompraService <CompraDomainEntity> {

    createCliente(cliente : ClienteDomainEntity) : Promise <ClienteDomainEntity>;
    createCompra(compra : CompraDomainEntity ) : Promise<CompraDomainEntity>;
    createCurso(curso : CursoDomainEntity) : Promise<CursoDomainEntity>;
    updateClientePhone(idCompra : string , idCliente : string , phone : number) : Promise<number>;
    updateCursoCosto(idCompra : string , idCurso : string , curso : CursoDomainEntity) : Promise<CursoDomainEntity>;
    updatePorcentajeCupon(idCompra : string , idCupon : string , porcentaje : number) : Promise<number>;


}

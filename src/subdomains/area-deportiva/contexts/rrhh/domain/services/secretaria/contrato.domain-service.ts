import { ContratoDomainEntity } from '../../entities/contrato/contrato.domain-entity';

export interface IContratoDomainService<T extends ContratoDomainEntity = ContratoDomainEntity> {

    ContratoModificarCosto(contratoId:string,entity: ContratoDomainEntity):Promise<T>;
    ContratoModificarFechaSalida(contratoId:string,entity: ContratoDomainEntity):Promise<T>;
    ContratoModificarState(contratoId:string,entity: ContratoDomainEntity):Promise<T>;

    NegociarContrato(contrato: T ):Promise<T>;
    BuscarContrato(contratoId:  string ):Promise< T>;

    
    
}

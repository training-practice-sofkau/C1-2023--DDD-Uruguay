import { TraspasoDomainEntity } from '../../entities/traspaso/traspaso.domain-entity';
export interface ITraspasoDomainService<T extends TraspasoDomainEntity = TraspasoDomainEntity> {

    
    NegociarTraspaso(traspaso: T ):Promise<T>;
    TraspasoModificarCosto(traspasoId:string,entity: T):Promise<T>;
    TraspasoModificarFechaSalida(traspasoId:string,entity: T):Promise<T>;
    TraspasoModificarEquipoNuevo(traspasoId:string,entity:T ):Promise<T>;
    TraspasoModificarEquipoSalida(traspasoId:string,entity: T):Promise<T>;
    TraspasoModificarState(traspasoId:string,entity: T):Promise<T>;
    BuscarTraspaso(traspasoId :  string ):Promise<T>;
}

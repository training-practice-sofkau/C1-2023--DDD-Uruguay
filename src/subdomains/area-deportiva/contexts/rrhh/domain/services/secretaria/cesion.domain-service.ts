import { CesionDomainEntity } from "../../entities";

export interface ICesionDomainService<T extends CesionDomainEntity = CesionDomainEntity> {

    NegociarCesion(cesion: T ):Promise< T >;
    CesionModificarCosto(cesionId: string,entity: T ):Promise<T>;
    CesionModificarFechaSalida(cesionId: string,entity: T ):Promise<T>;
    CesionModificarFechaRetorno(cesionId: string,entity: T ):Promise<T>;
    CesionModificarEquipoNuevo(cesionId: string,entity: T ):Promise<T>;
    CesionModificarEquipoSalida(cesionId: string,entity: T ):Promise<T>;
    CesionModificarState(cesionId: string,entity: T ):Promise< T >;
    
    BuscarCesion(cesionId: string ):Promise<T>;
    
    
}

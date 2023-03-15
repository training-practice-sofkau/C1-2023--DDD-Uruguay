import { NegociacionDomainEntity } from "../../entities";

export interface INegociacionDomainService <T extends NegociacionDomainEntity = NegociacionDomainEntity> {

    NegociacionModificarEquipoNuevo(negociacionId:string ,entity: T):Promise<T>;
    NegociacionModificarEquipoSalida(negociacionId:string ,entity: T):Promise<T>;
    NegociacionModificarTipoNegociacion(negociacionId:string ,entity: T):Promise<T>;
    NegociacionModificarState(negociacionId:string ,entity: T):Promise<T>;
    
}


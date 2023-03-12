import { NegociacionDomainEntity } from "../../entities";

export interface INegociacionDomainService <T extends NegociacionDomainEntity = NegociacionDomainEntity> {

    NegociacionModificarEquipoNuevo(equipoNuevoId: NegociacionDomainEntity):Promise<T>;
    NegociacionModificarEquipoSalida(equipoSalidaId: NegociacionDomainEntity):Promise<T>;
    NegociacionModificarTipoNegociacion(tipo: NegociacionDomainEntity):Promise<T>;
    NegociacionModificarState(state: NegociacionDomainEntity):Promise<T>;
    
}


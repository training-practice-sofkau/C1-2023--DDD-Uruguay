import { CesionDomainEntity } from '../../entities/cesion/cesion.domain-entity';

export interface ICesionDomainService<T extends CesionDomainEntity = CesionDomainEntity> {

    CesionModificarCosto(costo: CesionDomainEntity):Promise<T>;
    CesionModificarFechaSalida(fechaSalida: CesionDomainEntity):Promise<T>;
    CesionModificarFechaRetorno(fechaRetorno: CesionDomainEntity):Promise<T>;
    CesionModificarEquipoNuevo(equipoNuevoId: CesionDomainEntity):Promise<T>;
    CesionModificarEquipoSalida(equipoSalidaId: CesionDomainEntity):Promise<T>;
    CesionModificarState(state: CesionDomainEntity):Promise<T>;
    
    
}

import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';
import { INegociacionDomainService } from './negociacion.domain-service';
export interface ITramiteDomainService<T extends TramiteDomainEntity = TramiteDomainEntity> extends INegociacionDomainService {

    CrearNegociacion(tramite: TramiteDomainEntity):Promise<T>;  
    ModificarFecha(tramite: TramiteDomainEntity):Promise<T>;

    
 }

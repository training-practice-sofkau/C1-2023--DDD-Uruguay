import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';
import { ICrearNegociacionCommands, IModificarFechaCommands } from '../../interfaces';
import { INegociacionDomainService } from './negociacion.domain-service';
export interface ITramiteDomainService<T extends TramiteDomainEntity = TramiteDomainEntity> extends INegociacionDomainService {

    CrearNegociacion(negociacion: ICrearNegociacionCommands):Promise<T>;  
    ModificarFecha(fecha: IModificarFechaCommands):Promise<T>;

    
 }

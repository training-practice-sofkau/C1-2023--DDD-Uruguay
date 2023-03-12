import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';
import { ICrearNegociacionCommands, IModificarFechaCommands } from '../../interfaces';
export interface ITramiteDomainService<T extends TramiteDomainEntity = TramiteDomainEntity> {

    CrearNegociacion(negociacion: ICrearNegociacionCommands):Promise<T>;  
    ModificarFecha(fecha: IModificarFechaCommands):Promise<T>;

    
 }

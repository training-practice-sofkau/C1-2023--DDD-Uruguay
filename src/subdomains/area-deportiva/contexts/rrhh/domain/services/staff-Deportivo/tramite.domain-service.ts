import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';
export interface ITramiteDomainService<T extends TramiteDomainEntity = TramiteDomainEntity>{

    CrearNegociacion(tramite: T):Promise<T>;  

    ModificarFecha(tramiteId:string,entity: T):Promise<T>;

    CrearTramite(tramite: T):Promise<T>;

    BuscarTramite(Tramite: string):Promise<T>;

    
 }

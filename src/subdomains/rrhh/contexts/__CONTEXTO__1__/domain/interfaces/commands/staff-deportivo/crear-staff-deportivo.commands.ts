import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";
import { TramiteDomainEntity } from '../../../entities/tramite/tramite.entity.interface';

export interface ICrearStaffDeportivoCommands {
    
    staffDeportivoId?: string ;
    nombre: string;
    tamite?: TramiteDomainEntity;
    empleado?: EmpleadoDomainEntity;
}

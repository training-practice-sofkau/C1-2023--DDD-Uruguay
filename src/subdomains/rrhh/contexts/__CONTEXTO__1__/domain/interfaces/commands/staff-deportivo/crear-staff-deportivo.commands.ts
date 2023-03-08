import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export interface ICrearStaffDeportivoCommands {
    
    staffDeportivoId?: string ;
    tamiteId?: string ;
    directivaId?: string ;
    empleado: EmpleadoDomainEntity[];
}

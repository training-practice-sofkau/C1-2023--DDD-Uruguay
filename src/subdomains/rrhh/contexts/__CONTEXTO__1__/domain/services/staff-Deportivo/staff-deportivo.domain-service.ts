import { StaffDeportivoDomainEntity } from "../../entities/staff-deportivo/staff-deportivo.entity";
import { IAgregarEmpleadoCommands, IModificarEmpleadoCommands, IModificarTramiteCommands, IRemoverEmpleadoCommands } from "../../interfaces";
import { ICrearStaffDeportivoCommands } from "../../interfaces/commands/staff-deportivo/crear-staff-deportivo.commands";
import { ICrearTramiteCommands } from "../../interfaces/commands/staff-deportivo/crear-tramite.commands";

export interface IStaffDeportivoDomainService<T extends StaffDeportivoDomainEntity = StaffDeportivoDomainEntity> {

    CrearStaffDeportivo(staffDeportivo:ICrearStaffDeportivoCommands):Promise<T>;

    CrearTramite(tramite: ICrearTramiteCommands):Promise<T>;

    AgregarEmpleado(empleado:IAgregarEmpleadoCommands):Promise<T>;

    RemoverEmpleado(empleadoId: IRemoverEmpleadoCommands):Promise<T>;
        
    ModificarEmpleado(empleado:IModificarEmpleadoCommands):Promise<T>;
    
    ModificarTramite(tramite: IModificarTramiteCommands):Promise<T>;
    
}
import { StaffDeportivoDomainEntity } from "../../entities/staff-deportivo/staff-deportivo.entity";
import { IAgregarEmpleadoCommands, IModificarFechaTramiteCommands, IModificarSalarioEmpleadoCommands } from "../../interfaces";
import { ICrearStaffDeportivoCommands } from "../../interfaces/commands/staff-deportivo/crear-staff-deportivo.commands";
import { ICrearTramiteCommands } from "../../interfaces/commands/staff-deportivo/crear-tramite.commands";
import { EmpleadoDomainEntity } from '../../entities/empleado/EmpleadoDomainEntity';
import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';

export interface IStaffDeportivoDomainService { //<T extends StaffDeportivoDomainEntity >

    CrearStaffDeportivo(staffDeportivo:ICrearStaffDeportivoCommands):Promise<StaffDeportivoDomainEntity>;

    CrearTramite(tramite: ICrearTramiteCommands):Promise<TramiteDomainEntity>;

    AgregarEmpleado(empleado:IAgregarEmpleadoCommands):Promise<EmpleadoDomainEntity>;
        
    ModificarSalarioEmpleado(empleado:IModificarSalarioEmpleadoCommands):Promise<EmpleadoDomainEntity>;
    
    ModificarFechaTramite(tramite: IModificarFechaTramiteCommands):Promise<TramiteDomainEntity>;
    
}
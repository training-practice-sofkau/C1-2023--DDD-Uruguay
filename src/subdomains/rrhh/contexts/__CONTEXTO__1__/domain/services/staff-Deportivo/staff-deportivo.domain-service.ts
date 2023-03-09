import { StaffDeportivoDomainEntity } from "../../entities/staff-deportivo/staff-deportivo.entity";
import { EmpleadoDomainEntity } from '../../entities/empleado/EmpleadoDomainEntity';
import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';
import { BuscarTramiteCommands } from '../../interfaces/commands/staff-deportivo/buscar-tramite.commands';
import { BuscarEmpleadoCommands } from '../../interfaces/commands/staff-deportivo/buscar-empleado.commands';

export interface IStaffDeportivoDomainService{ //<T extends StaffDeportivoDomainEntity >

    CrearStaffDeportivo(staffDeportivo: StaffDeportivoDomainEntity):Promise<StaffDeportivoDomainEntity>;

    CrearTramite(tramite: TramiteDomainEntity):Promise<TramiteDomainEntity>;

    AgregarEmpleado(empleado:EmpleadoDomainEntity):Promise<EmpleadoDomainEntity>;

    
    GetTramite(Tramite:BuscarTramiteCommands):Promise<TramiteDomainEntity>;

    GetEmpleado(empleado:BuscarEmpleadoCommands):Promise<EmpleadoDomainEntity>;
        
}
import { StaffDeportivoDomainEntity } from "../../entities/staff-deportivo/staff-deportivo.entity";
import { EmpleadoDomainEntity } from '../../entities/empleado/EmpleadoDomainEntity';
import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';

export interface IStaffDeportivoDomainService{ //<T extends StaffDeportivoDomainEntity >

    CrearStaffDeportivo(staffDeportivo: StaffDeportivoDomainEntity):Promise<StaffDeportivoDomainEntity>;

    CrearTramite(tramite: TramiteDomainEntity):Promise<TramiteDomainEntity>;

    AgregarEmpleado(empleado:EmpleadoDomainEntity):Promise<EmpleadoDomainEntity>;
        
}
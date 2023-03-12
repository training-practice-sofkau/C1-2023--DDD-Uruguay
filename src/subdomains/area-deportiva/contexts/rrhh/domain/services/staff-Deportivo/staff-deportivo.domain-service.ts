import { StaffDeportivoDomainEntity } from "../../entities/staff-deportivo/staff-deportivo.entity";
import { EmpleadoDomainEntity } from '../../entities/empleado/EmpleadoDomainEntity';
import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';
import { ITramiteDomainService } from './tramite.domain-service';
import { IEmpleadoDomainService } from './empleado.domain-service';

export interface IStaffDeportivoDomainService extends  ITramiteDomainService , IEmpleadoDomainService{ //<T extends StaffDeportivoDomainEntity >

    CrearStaffDeportivo(staffDeportivo: StaffDeportivoDomainEntity):Promise<StaffDeportivoDomainEntity>;

    CrearTramite(tramite: TramiteDomainEntity):Promise<TramiteDomainEntity>;

    AgregarEmpleado(empleado:EmpleadoDomainEntity):Promise<EmpleadoDomainEntity>;

    
    BuscarTramite(Tramite: TramiteDomainEntity):Promise<TramiteDomainEntity>;

    BuscarEmpleado(empleado: EmpleadoDomainEntity):Promise<EmpleadoDomainEntity>;
        
}
import { StaffDeportivoDomainEntity } from "../../entities/staff-deportivo/staff-deportivo.entity";

export interface IStaffDeportivoDomainService <T extends StaffDeportivoDomainEntity = StaffDeportivoDomainEntity >{ //<T extends StaffDeportivoDomainEntity >

    CrearStaffDeportivo(staffDeportivo: T):Promise<T>;

    
}
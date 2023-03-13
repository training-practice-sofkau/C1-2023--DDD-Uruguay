import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';

export interface IEmpleadoRemovidoResponse {
    
    success: boolean;
    data: StaffDeportivoDomainEntity | null;
}

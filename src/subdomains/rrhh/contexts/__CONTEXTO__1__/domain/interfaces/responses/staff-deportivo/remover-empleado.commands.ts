import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';

export interface EmpleadoRemovidoResponse {
    
    success: boolean;
    data: StaffDeportivoDomainEntity | null;
}

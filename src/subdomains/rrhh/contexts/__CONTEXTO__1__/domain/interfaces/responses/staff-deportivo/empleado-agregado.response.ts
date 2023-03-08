import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';

export interface EmpleadoAgregadoResponse {
    success: boolean;
    data: StaffDeportivoDomainEntity | null;
}

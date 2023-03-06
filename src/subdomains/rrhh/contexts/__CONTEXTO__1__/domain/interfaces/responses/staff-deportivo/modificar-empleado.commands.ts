import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';
export interface EmpleadoModificadoResponse {
    success: boolean;
    data: StaffDeportivoDomainEntity | null;
}

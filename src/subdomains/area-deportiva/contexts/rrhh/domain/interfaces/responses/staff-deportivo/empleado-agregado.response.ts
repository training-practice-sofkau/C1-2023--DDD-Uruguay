import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';

export interface IEmpleadoAgregadoResponse {
    success: boolean;
    data: StaffDeportivoDomainEntity | null;
}

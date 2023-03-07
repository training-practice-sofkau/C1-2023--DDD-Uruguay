import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';

export interface StaffDeportivoCreadoResponse {
    success: boolean;
    data: StaffDeportivoDomainEntity | null;
}

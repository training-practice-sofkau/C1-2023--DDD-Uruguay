import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';

export interface IStaffDeportivoCreadoResponse {
    success: boolean;
    data: StaffDeportivoDomainEntity | null;
}

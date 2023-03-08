import { StaffDeportivoDomainEntity } from "../../../entities/staff-deportivo/staff-deportivo.entity";

export interface TramiteModificadoResponse {
    success: boolean;
    data: StaffDeportivoDomainEntity | null;
}

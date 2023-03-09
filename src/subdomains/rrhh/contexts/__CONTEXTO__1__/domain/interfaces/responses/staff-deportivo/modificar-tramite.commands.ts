import { StaffDeportivoDomainEntity } from "../../../entities/staff-deportivo/staff-deportivo.entity";

export interface ITramiteModificadoResponse {
    success: boolean;
    data: StaffDeportivoDomainEntity | null;
}

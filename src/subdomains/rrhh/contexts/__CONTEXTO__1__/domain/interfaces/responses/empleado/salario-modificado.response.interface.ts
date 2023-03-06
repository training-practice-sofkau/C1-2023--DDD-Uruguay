import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export interface SalarioModificadoResponse {

    success: boolean;
    data: EmpleadoDomainEntity | null;
}

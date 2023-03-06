import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export interface NombreModificadoResponse {
    success: boolean;
    data: EmpleadoDomainEntity | null;
}

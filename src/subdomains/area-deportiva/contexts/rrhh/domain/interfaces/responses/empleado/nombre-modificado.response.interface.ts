import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export interface INombreModificadoResponse {
    success: boolean;
    data: EmpleadoDomainEntity | null;
}

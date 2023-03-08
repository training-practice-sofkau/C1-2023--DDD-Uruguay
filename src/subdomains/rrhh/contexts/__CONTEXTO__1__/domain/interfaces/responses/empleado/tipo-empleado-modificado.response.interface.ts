import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export interface TipoEmpleadoModificadoResponse {

    success: boolean;
    data: EmpleadoDomainEntity | null;
}

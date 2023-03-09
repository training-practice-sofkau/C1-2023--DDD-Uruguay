import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export interface ITipoEmpleadoModificadoResponse {

    success: boolean;
    data: EmpleadoDomainEntity | null;
}

import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export interface ISalarioModificadoResponse {

    success: boolean;
    data: EmpleadoDomainEntity | null;
}

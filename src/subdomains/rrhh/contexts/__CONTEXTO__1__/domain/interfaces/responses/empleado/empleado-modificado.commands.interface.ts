import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export interface EmpleadoModificadoCommands {
    success: boolean;
    data: EmpleadoDomainEntity | null;
}

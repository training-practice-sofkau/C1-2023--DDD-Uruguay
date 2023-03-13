import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export interface IEmpleadoModificadoCommands {
    success: boolean;
    data: EmpleadoDomainEntity | null;
}

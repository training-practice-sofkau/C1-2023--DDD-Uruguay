import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';

export interface ISalarioEmpleadoModificadoResponse {
    success: boolean;
    data: EmpleadoDomainEntity | null;
}

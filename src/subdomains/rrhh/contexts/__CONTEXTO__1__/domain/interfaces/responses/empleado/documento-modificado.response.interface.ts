import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';

export interface DocumentoModificadoResponse {
    success: boolean;
    data: EmpleadoDomainEntity | null;

}

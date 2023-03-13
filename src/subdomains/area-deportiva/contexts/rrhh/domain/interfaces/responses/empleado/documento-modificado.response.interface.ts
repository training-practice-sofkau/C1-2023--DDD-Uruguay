import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';

export interface IDocumentoModificadoResponse {
    success: boolean;
    data: EmpleadoDomainEntity | null;

}

import { EmpleadoDomainEntity } from '../../../entities';

export interface IEmpleadoAgregadoResponse {
    success: boolean;
    data: EmpleadoDomainEntity | null;
}

import { EmpleadoDomainEntity } from '../../../entities';

export interface IEmpleadoBuscadoResponse {
    success: boolean;
    data: EmpleadoDomainEntity | null;
}

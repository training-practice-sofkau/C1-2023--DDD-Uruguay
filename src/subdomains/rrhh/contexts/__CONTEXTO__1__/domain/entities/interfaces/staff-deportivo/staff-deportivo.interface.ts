import { IdValueObject } from '../../../value-objects/id/id.value-object';
import { EmpleadoDomainEntity } from '../../empleado/EmpleadoDomainEntity';
export interface IStaffDeportivoDomainEntity {

    staffDeportivoId: string | IdValueObject;
    tamiteId: string | IdValueObject;
    directivaId: string | IdValueObject;
    empleado: EmpleadoDomainEntity;
}

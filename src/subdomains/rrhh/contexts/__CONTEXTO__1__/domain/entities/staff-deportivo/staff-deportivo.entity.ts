import { v4 as uuidv4 } from 'uuid';


import { IdValueObject } from '../../value-objects/id/id.value-object';
import { EmpleadoDomainEntity } from '../empleado/EmpleadoDomainEntity';
import { IStaffDeportivoDomainEntity } from '../interfaces';
export class StaffDeportivoDomainEntity implements IStaffDeportivoDomainEntity {
    
    
    staffDeportivoId?: string | IdValueObject;
    tamiteId?: string | IdValueObject;
    directivaId?: string | IdValueObject;
    empleado: EmpleadoDomainEntity[];

    constructor(_staffDeportivo?: IStaffDeportivoDomainEntity) {

        if (_staffDeportivo.staffDeportivoId)
            this.staffDeportivoId = _staffDeportivo.staffDeportivoId;
        else
            this.staffDeportivoId = uuidv4();

        if (_staffDeportivo.tamiteId)
            this.tamiteId = _staffDeportivo.tamiteId;

        if (_staffDeportivo.directivaId)
            this.directivaId = _staffDeportivo.directivaId;

        if (_staffDeportivo.empleado)
            this.empleado = _staffDeportivo.empleado;
    }
}

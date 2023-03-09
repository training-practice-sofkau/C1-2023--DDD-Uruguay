import { v4 as uuidv4 } from 'uuid';


import { IdValueObject } from '../../value-objects/id/id.value-object';
import { IStaffDeportivoDomainEntity } from '../interfaces';
import { NombreValueObject } from '../../value-objects/nombre/nombre.value-object';
import { ITramiteDomainInterface } from '../interfaces/tramite/tramite.domain-interface';
import { IEmpleadoDomainEntity } from '../interfaces/empleado/empleado.domain-entity.interface';
export class StaffDeportivoDomainEntity implements IStaffDeportivoDomainEntity {
    
    
    staffDeportivoId?: string | IdValueObject;
    nombre?: string | NombreValueObject;
    tramite?: ITramiteDomainInterface;
    empleado?: IEmpleadoDomainEntity;

    constructor(_staffDeportivo?: IStaffDeportivoDomainEntity) {

        if (_staffDeportivo.staffDeportivoId)
            this.staffDeportivoId = _staffDeportivo.staffDeportivoId;
        else
            this.staffDeportivoId = uuidv4();

            if (_staffDeportivo.nombre)
                this.nombre = _staffDeportivo.nombre;

        if (_staffDeportivo.tramite)
            this.tramite = _staffDeportivo.tramite;


        if (_staffDeportivo.empleado)
            this.empleado = _staffDeportivo.empleado;
    }
}

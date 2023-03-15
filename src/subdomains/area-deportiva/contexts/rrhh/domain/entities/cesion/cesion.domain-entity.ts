import { v4 as uuidv4 } from "uuid";

import { IdValueObject } from '../../value-objects';
import { CostoValueObject } from '../../value-objects/costo';
import { FechaValueObject } from '../../value-objects/fecha';
import { ICesionDomainInterface } from '../interfaces/cesion/cesion.domain-interface';
import { StateValueObject } from '../../value-objects/state/state.value-object';
export class CesionDomainEntity implements ICesionDomainInterface {
   
    cesionId?: string | IdValueObject;
    empleadoId?: string | IdValueObject;
    equipoNuevoId?: string | IdValueObject;
    fechaSalida?: string | FechaValueObject;
    costo?: number | CostoValueObject;
    state?: boolean | StateValueObject;

    constructor(_cesion?: ICesionDomainInterface) {

        if (_cesion?.cesionId)
            this.cesionId = _cesion.cesionId;
        else
            this.cesionId = uuidv4();

        if (_cesion?.empleadoId)
            this.empleadoId = _cesion.empleadoId;

        if (_cesion?.equipoNuevoId)
            this.equipoNuevoId = _cesion.equipoNuevoId;

        if (_cesion?.fechaSalida)
            this.fechaSalida = _cesion.fechaSalida;

        if (_cesion?.costo)
            this.costo = _cesion.costo;

        if (_cesion?.state)
            this.state = _cesion.state;

    }
    
}

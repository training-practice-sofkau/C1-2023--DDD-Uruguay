import { v4 as uuidv4 } from "uuid";

import { IdValueObject } from '../../value-objects';
import { CostoValueObject } from '../../value-objects/costo';
import { FechaValueObject } from '../../value-objects/fecha';
import { ITraspasoDomainInterface } from '../interfaces/traspaso/traspaso.domain-interface';

export class TraspasoDomainEntity implements ITraspasoDomainInterface {

    traspasoId?: string | IdValueObject;
    empleadoId: string | IdValueObject;
    equipoNuevoId?: string | IdValueObject;
    costo?: number | CostoValueObject;
    state?: boolean;
    fechaSalida?: string | FechaValueObject;
    
    constructor(_traspaso?: ITraspasoDomainInterface) {

        if (_traspaso.traspasoId)
            this.traspasoId = _traspaso.traspasoId;
        else
            this.traspasoId = uuidv4();

        if (_traspaso.empleadoId)
            this.empleadoId = _traspaso.empleadoId;

        if (_traspaso.equipoNuevoId)
            this.equipoNuevoId = _traspaso.equipoNuevoId;

        if (_traspaso.costo)
            this.costo = _traspaso.costo;

        if (_traspaso.state)
            this.state = _traspaso.state;

        if (_traspaso.fechaSalida)
            this.fechaSalida = _traspaso.fechaSalida;
    }
  
}

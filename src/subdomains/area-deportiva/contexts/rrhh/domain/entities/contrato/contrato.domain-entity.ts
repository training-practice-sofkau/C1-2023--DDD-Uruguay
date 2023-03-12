import { v4 as uuidv4 } from "uuid";

import { IdValueObject } from '../../value-objects';
import { CostoValueObject } from '../../value-objects/costo';
import { FechaValueObject } from '../../value-objects/fecha';
import { ICotratoDomainInterface } from '../interfaces/contrato/cotrato.domain-interface';
export class ContratoDomainEntity implements ICotratoDomainInterface {
    
    contratoId?: string | IdValueObject;
    empleadoId: string | IdValueObject;
    costo?: number | CostoValueObject;
    fechaFinalizacion?: string | FechaValueObject;
    state?: boolean;

    constructor(_contrato?: ICotratoDomainInterface) {

        if (_contrato.contratoId)
            this.contratoId = _contrato.contratoId;
        else
            this.contratoId = uuidv4();

        if (_contrato.empleadoId)
            this.empleadoId = _contrato.empleadoId;

        if (_contrato.fechaFinalizacion)
            this.fechaFinalizacion = _contrato.fechaFinalizacion;

        if (_contrato.costo)
            this.costo = _contrato.costo;

        if (_contrato.state)
            this.state = _contrato.state;

    }
}

import { v4 as uuidv4 } from "uuid";

import { IdValueObject } from '../../value-objects';
import { FechaValueObject } from '../../value-objects/fecha';
import { ITramiteDomainInterface } from '../interfaces/tramite/tramite.domain-interface';
import { NegociacionDomainEntity } from '../negociacion';

export class TramiteDomainEntity implements ITramiteDomainInterface{

    tramiteId?: string | IdValueObject;
    negociacion: NegociacionDomainEntity;
    fecha?: string | FechaValueObject;

    constructor(_tramite?: ITramiteDomainInterface) {

        if (_tramite.tramiteId)
            this.tramiteId = _tramite.tramiteId;
        else
            this.tramiteId = uuidv4();

        if (_tramite.negociacion)
            this.negociacion = _tramite.negociacion;

        if (_tramite.fecha)
            this.fecha = _tramite.fecha;

    }
}

import { IdValueObject } from "../../../value-objects";
import { CostoValueObject } from "../../../value-objects/costo";
import { FechaValueObject } from "../../../value-objects/fecha";
import { StateValueObject } from '../../../value-objects/state/state.value-object';

export interface ICesionDomainInterface {
    cesionId?: string | IdValueObject;
    empleadoId?: string | IdValueObject;
    equipoNuevoId?: string | IdValueObject;
    fechaSalida?: string | FechaValueObject;
    costo?: number | CostoValueObject;
    state ?: boolean | StateValueObject;
}

import { CostoValueObject } from '../../../value-objects/costo';
import { FechaValueObject } from '../../../value-objects/fecha';
import { IdValueObject } from '../../../value-objects/id/id.value-object';

export interface NegociarCesionCommands {

    cesionId?: string | IdValueObject;
    empleadoId: string | IdValueObject;
    equipoNuevoId?: string | IdValueObject;
    fechaSalida?: string | FechaValueObject;
    costo?: number | CostoValueObject;
    state? : boolean;

}

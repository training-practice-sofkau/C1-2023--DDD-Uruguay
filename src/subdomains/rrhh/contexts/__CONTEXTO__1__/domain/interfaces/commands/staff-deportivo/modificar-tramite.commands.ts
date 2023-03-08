import { FechaValueObject } from '../../../value-objects/fecha/fecha.value-object';
import { IdValueObject } from '../../../value-objects/id/id.value-object';

export interface IModificarFechaTramiteCommands {
    tramiteId: string | IdValueObject;
    fecha: string | FechaValueObject;
}

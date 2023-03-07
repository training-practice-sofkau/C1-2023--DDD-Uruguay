import { IdValueObject } from '../../../value-objects/id/id.value-object';
import { CostoValueObject } from '../../../value-objects/costo/costo.value-object';
import { FechaValueObject } from '../../../value-objects/fecha/fecha.value-object';
export interface ICotratoDomainInterface {
    contratoId?: string | IdValueObject;
    empleadoId: string | IdValueObject;
    costo?: number | CostoValueObject;
    fechaFinalizacion?: string | FechaValueObject;
    state ?: boolean;
}

import { IdValueObject } from '../../../value-objects/id/id.value-object';
import { CostoValueObject } from '../../../value-objects/costo/costo.value-object';
import { FechaValueObject } from '../../../value-objects/fecha/fecha.value-object';
export interface ITraspasoDomainInterface {

    traspasoId?: string | IdValueObject;
    empleadoId: string | IdValueObject;
    equipoNuevoId?: string | IdValueObject;
    costo?: number | CostoValueObject;
    state?: boolean;
    fechaSalida?: string | FechaValueObject;
}

import { IdValueObject } from '../../../value-objects/id/id.value-object';
import { CostoValueObject } from '../../../value-objects/costo/costo.value-object';
import { FechaValueObject } from '../../../value-objects/fecha/fecha.value-object';
import { StateValueObject } from '../../../value-objects/state/state.value-object';
export interface ITraspasoDomainInterface {

    traspasoId?: string | IdValueObject;
    empleadoId: string | IdValueObject;
    equipoNuevoId?: string | IdValueObject;
    equipoSalidaId?: string | IdValueObject;
    costo?: number | CostoValueObject;
    state?: boolean | StateValueObject;
    fechaSalida?: string | FechaValueObject;
}

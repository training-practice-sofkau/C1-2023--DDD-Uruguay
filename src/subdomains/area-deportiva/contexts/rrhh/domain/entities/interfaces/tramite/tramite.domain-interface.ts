import { IdValueObject } from '../../../value-objects/id/id.value-object';
import { FechaValueObject } from '../../../value-objects/fecha/fecha.value-object';
import { INegociacionDomainEntityInterface } from '../negociacion';
export interface ITramiteDomainInterface {

    tramiteId?: string | IdValueObject;
    negociacion?: INegociacionDomainEntityInterface;
    fecha?: string | FechaValueObject;
}

import { IdValueObject } from '../../../value-objects/id/id.value-object';
import { NegociacionDomainEntity } from '../../negociacion/negociacion.domain-entity';
import { FechaValueObject } from '../../../value-objects/fecha/fecha.value-object';
export interface TramiteDomainInterface {

    tramiteId?: string | IdValueObject;
    negociacion: NegociacionDomainEntity;
    fecha?: string | FechaValueObject;
}

import { IdValueObject } from '../../../value-objects/id/id.value-object';
import { ContratoDomainEntity } from '../../contrato/contrato.domain-entity';
import { TraspasoDomainEntity } from '../../traspaso/traspaso.domain-entity';
import { CesionDomainEntity } from '../../cesion/cesion.domain-entity';
export interface SecretariaDomainInterface {

    empleadoId: string | IdValueObject;
    staffDeportivoId: string | IdValueObject;
    contrato: ContratoDomainEntity[];
    traspaso: TraspasoDomainEntity[];
    cesion: CesionDomainEntity[];

}

import { TraspasoDomainEntity } from '../../../entities/traspaso/traspaso.domain-entity';

export interface CostoModificadoResponse {

    success: boolean;
    data: TraspasoDomainEntity | null;
}

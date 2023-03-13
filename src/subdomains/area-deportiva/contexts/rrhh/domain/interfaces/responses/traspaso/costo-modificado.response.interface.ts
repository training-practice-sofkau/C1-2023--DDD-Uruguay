import { TraspasoDomainEntity } from '../../../entities/traspaso/traspaso.domain-entity';

export interface ICostoModificadoResponse {

    success: boolean;
    data: TraspasoDomainEntity | null;
}

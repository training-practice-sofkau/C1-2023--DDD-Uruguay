import { TraspasoDomainEntity } from '../../../entities/traspaso/traspaso.domain-entity';

export interface ITraspasoBuscadaResponse {
    success: boolean;
    data: TraspasoDomainEntity | null;
}

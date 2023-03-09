import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';

export interface ICesionNegociadoResponse {
    success: boolean;
    data: CesionDomainEntity | null;
}

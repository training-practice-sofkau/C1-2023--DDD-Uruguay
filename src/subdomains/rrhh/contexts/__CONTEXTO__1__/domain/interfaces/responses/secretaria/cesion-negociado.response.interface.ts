import { SecretariaDomainEntity } from '../../../entities/secretaria/secretaria.domain-entity';

export interface CesionNegociadoResponse {
    success: boolean;
    data: SecretariaDomainEntity | null;
}

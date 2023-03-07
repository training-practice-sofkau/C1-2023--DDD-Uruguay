import { SecretariaDomainEntity } from '../../../entities/secretaria/secretaria.domain-entity';

export interface SecretariaCreadaResponse {
    success: boolean;
    data: SecretariaDomainEntity | null;
}

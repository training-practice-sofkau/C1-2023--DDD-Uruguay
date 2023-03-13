import { SecretariaDomainEntity } from '../../../entities/secretaria/secretaria.domain-entity';

export interface ISecretariaCreadaResponse {
    success: boolean;
    data: SecretariaDomainEntity | null;
}

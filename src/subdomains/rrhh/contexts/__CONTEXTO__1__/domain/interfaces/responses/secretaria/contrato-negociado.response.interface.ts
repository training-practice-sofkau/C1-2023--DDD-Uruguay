import { SecretariaDomainEntity } from "../../../entities/secretaria/secretaria.domain-entity";

export interface ContratoNegociadoResponse {
    success: boolean;
    data: SecretariaDomainEntity | null;
}

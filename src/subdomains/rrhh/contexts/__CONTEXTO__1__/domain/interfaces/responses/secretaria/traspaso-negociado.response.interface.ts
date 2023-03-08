import { SecretariaDomainEntity } from "../../../entities/secretaria/secretaria.domain-entity";

export interface TraspasoNegociadoResponse {
    success: boolean;
    data: SecretariaDomainEntity | null;
}

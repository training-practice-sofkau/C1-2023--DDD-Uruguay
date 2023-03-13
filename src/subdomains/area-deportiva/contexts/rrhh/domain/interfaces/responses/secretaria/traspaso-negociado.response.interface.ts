import { SecretariaDomainEntity } from "../../../entities/secretaria/secretaria.domain-entity";
import { TraspasoDomainEntity } from '../../../entities/traspaso/traspaso.domain-entity';

export interface ITraspasoNegociadoResponse {
    success: boolean;
    data: TraspasoDomainEntity | null;
}

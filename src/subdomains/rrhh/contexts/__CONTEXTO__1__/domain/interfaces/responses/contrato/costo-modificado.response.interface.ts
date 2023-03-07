import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';

export interface CostoModificadoResponse {
    success: boolean;
    data: ContratoDomainEntity | null;
}

import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';

export interface ICostoModificadoResponse {
    success: boolean;
    data: ContratoDomainEntity | null;
}

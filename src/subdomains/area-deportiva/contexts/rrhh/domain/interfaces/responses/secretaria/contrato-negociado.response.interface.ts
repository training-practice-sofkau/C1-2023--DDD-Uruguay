import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';

export interface IContratoNegociadoResponse {
    success: boolean;
    data: ContratoDomainEntity | null;
}

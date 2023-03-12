import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';

export interface IContratoBuscadaResponse {
    success: boolean;
    data: ContratoDomainEntity | null;
}

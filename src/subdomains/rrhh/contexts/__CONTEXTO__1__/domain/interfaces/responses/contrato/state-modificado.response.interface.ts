import { ContratoDomainEntity } from "../../../entities/contrato/contrato.domain-entity";

export interface StateModificadoResponse {
    success: boolean;
    data: ContratoDomainEntity | null;
}

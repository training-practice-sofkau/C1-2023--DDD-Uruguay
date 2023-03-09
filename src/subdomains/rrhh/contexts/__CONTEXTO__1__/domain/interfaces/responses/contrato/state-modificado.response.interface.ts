import { ContratoDomainEntity } from "../../../entities/contrato/contrato.domain-entity";

export interface IStateModificadoResponse {
    success: boolean;
    data: ContratoDomainEntity | null;
}

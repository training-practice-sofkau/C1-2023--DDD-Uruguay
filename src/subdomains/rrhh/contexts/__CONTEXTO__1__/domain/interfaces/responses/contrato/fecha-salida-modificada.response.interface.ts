import { ContratoDomainEntity } from "../../../entities/contrato/contrato.domain-entity";

export interface FechaSalidaModificadaResponse{
    success: boolean;
    data: ContratoDomainEntity | null;
}

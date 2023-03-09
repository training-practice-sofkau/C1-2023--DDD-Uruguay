import { ContratoDomainEntity } from "../../../entities/contrato/contrato.domain-entity";

export interface IFechaSalidaModificadaResponse{
    success: boolean;
    data: ContratoDomainEntity | null;
}

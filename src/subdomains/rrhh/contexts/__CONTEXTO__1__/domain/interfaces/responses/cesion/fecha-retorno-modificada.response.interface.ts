import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";

export interface FechaRetornoModificadaResponse {
    success: boolean;
    data: CesionDomainEntity | null;
}

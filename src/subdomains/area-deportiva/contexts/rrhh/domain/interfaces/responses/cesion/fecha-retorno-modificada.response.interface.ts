import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";

export interface IFechaRetornoModificadaResponse {
    success: boolean;
    data: CesionDomainEntity | null;
}

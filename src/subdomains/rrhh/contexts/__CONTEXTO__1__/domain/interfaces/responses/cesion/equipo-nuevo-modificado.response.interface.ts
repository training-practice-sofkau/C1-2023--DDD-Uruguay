import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";

export interface EquipoNuevoModificadoResponse {
     success: boolean;
    data: CesionDomainEntity | null;
}

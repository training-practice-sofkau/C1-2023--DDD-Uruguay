import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";

export interface EquipoSalidaModificadoResponse {
    success: boolean;
    data: CesionDomainEntity | null;
}

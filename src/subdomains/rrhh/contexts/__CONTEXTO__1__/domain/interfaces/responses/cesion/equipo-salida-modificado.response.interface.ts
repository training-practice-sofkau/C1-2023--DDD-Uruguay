import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";

export interface IEquipoSalidaModificadoResponse {
    success: boolean;
    data: CesionDomainEntity | null;
}

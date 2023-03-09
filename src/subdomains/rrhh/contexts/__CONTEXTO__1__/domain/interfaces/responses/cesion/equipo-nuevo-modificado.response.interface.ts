import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";

export interface IEquipoNuevoModificadoResponse {
     success: boolean;
    data: CesionDomainEntity | null;
}

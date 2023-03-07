import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";

export interface StateModificadoResponse {

    success: boolean;
    data: CesionDomainEntity | null;
}

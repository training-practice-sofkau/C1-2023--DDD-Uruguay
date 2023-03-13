import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";

export interface IStateModificadoResponse {

    success: boolean;
    data: CesionDomainEntity | null;
}

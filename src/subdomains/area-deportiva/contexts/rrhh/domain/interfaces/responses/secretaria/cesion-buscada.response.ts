import { CesionDomainEntity } from "../../../entities";

export interface ICesionBuscadaResponse {
    success: boolean;
    data: CesionDomainEntity | null;
}

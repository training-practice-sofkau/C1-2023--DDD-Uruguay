import { TraspasoDomainEntity } from "../../../entities/traspaso/traspaso.domain-entity";

export interface IEquipoNuevoModificadoResponse {
    
    success: boolean;
    data: TraspasoDomainEntity | null;
}

import { TraspasoDomainEntity } from "../../../entities/traspaso/traspaso.domain-entity";

export interface EquipoNuevoModificadoResponse {
    
    success: boolean;
    data: TraspasoDomainEntity | null;
}

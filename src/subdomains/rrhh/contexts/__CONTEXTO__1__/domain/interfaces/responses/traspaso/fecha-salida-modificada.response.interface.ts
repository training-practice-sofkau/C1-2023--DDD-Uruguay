import { TraspasoDomainEntity } from "../../../entities/traspaso/traspaso.domain-entity";

export interface FechaSalidaModificadoResponse {
    
    success: boolean;
    data: TraspasoDomainEntity | null;
}

import { TraspasoDomainEntity } from "../../../entities/traspaso/traspaso.domain-entity";

export interface IFechaSalidaModificadoResponse {
    
    success: boolean;
    data: TraspasoDomainEntity | null;
}

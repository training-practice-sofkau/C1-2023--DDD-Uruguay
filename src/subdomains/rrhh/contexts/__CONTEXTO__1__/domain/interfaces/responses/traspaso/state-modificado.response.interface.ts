import { TraspasoDomainEntity } from "../../../entities/traspaso/traspaso.domain-entity";

export interface StateModificadoResponse {

    success: boolean;
    data: TraspasoDomainEntity | null;
}

import { TraspasoDomainEntity } from "../../../entities/traspaso/traspaso.domain-entity";

export interface IStateModificadoResponse {

    success: boolean;
    data: TraspasoDomainEntity | null;
}

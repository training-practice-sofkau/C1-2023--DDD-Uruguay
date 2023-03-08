import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';

export interface FechaSalidaModificadoResponse{
    success: boolean;
    data: CesionDomainEntity | null;
}

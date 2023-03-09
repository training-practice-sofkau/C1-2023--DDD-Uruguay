import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';

export interface IFechaSalidaModificadoResponse{
    success: boolean;
    data: CesionDomainEntity | null;
}

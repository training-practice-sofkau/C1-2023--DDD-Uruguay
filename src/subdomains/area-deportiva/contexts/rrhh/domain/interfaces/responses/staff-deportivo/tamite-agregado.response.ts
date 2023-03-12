import { TramiteDomainEntity } from '../../../entities/tramite/tramite.entity.interface';

export interface ItramiteBuscadoResponse {
    success: boolean;
    data: TramiteDomainEntity | null;
}

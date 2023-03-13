import { TramiteDomainEntity } from '../../../entities/tramite/tramite.entity.interface';

export interface INegociacionCreadaResponse {
    
    success: boolean;
    data: TramiteDomainEntity | null;
}

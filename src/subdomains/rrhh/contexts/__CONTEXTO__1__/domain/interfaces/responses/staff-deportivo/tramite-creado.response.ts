import { TramiteDomainEntity } from '../../../entities/tramite/tramite.entity.interface';

export interface ITramiteCreadoResponse {
    success: boolean;
    data: TramiteDomainEntity | null;
}

import { EventPublisherBase } from 'src/libs';
import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';
import { TramiteDomainEntity } from '../../../entities/tramite/tramite.entity.interface';

export abstract class TramiteAgregadoEventPublisher<Response = TramiteDomainEntity>
extends EventPublisherBase<Response>{


publish<Result = any>(): Promise<Result> {
    return this.emit(
        'management_system.registered-order',
        JSON.stringify({ data: this.response })
    )
}
    }

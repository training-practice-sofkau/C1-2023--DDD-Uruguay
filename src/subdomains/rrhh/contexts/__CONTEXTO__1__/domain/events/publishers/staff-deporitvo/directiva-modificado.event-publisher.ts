import { EventPublisherBase } from 'src/libs';
import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';

export abstract class DirectivaModificadoEventPublisher<Response = StaffDeportivoDomainEntity>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'management_system.registered-order',
        JSON.stringify({ data: this.response })
    )
}
}
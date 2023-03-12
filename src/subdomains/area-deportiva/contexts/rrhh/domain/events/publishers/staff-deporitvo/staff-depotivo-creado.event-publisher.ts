import { EventPublisherBase } from 'src/libs';
import { StaffDeportivoDomainEntity } from '../../../entities/staff-deportivo/staff-deportivo.entity';

export abstract class StaffDeportivoCreadoEventPublisher<Response = StaffDeportivoDomainEntity>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'administracion-Deportiva.registered-order',
        JSON.stringify({ data: this.response })
    )
}
}
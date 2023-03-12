import { EventPublisherBase } from "src/libs";
import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';

export abstract class EmpleadoAgregadoEventPublisher<Response = EmpleadoDomainEntity>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'Administracion-deportiva.registered-order',
        JSON.stringify({ data: this.response })
    )
}
}
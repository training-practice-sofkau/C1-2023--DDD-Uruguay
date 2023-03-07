import { EventPublisherBase } from "src/libs";
import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export abstract class TipoEmpleadoModificado
<Response = EmpleadoDomainEntity>
    extends EventPublisherBase<Response>{
        
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.registered-order',
            JSON.stringify({ data: this.response })
        )
    }
}
import { ValueObjectErrorHandler, IUseCase } from "src/libs";
import { IBuscarEmpleadoCommands } from '../../../domain/interfaces/commands/staff-deportivo/buscar-empleado.commands';
import { INombreModificadoResponse } from '../../../domain/interfaces/responses/empleado/nombre-modificado.response.interface';
import { StaffDeportivoAggregate, IStaffDeportivoDomainService } from "../../../domain";
import { EmpleadoDomainEntity } from '../../../domain/entities/empleado/EmpleadoDomainEntity';
import { EmpleadoBuscadoEventPublisher } from '../../../domain/events/publishers/staff-deporitvo/empleado-buscado.event-publisher';

export class empleadoIdEmpleadoUseCase extends ValueObjectErrorHandler
implements IUseCase<IBuscarEmpleadoCommands, INombreModificadoResponse> {

private readonly aggregateRoot: StaffDeportivoAggregate;

constructor(
    private readonly staffDeportivoService: IStaffDeportivoDomainService,
    private readonly empleadoBuscadoEvent: EmpleadoBuscadoEventPublisher,
) {
    super();
    this.aggregateRoot = new StaffDeportivoAggregate({ staffDeportivoService, empleadoBuscadoEvent });
}

//Ejecutar el comando , usando otra funcion para crear lo que necesita el comando 
async execute(command?: IBuscarEmpleadoCommands): Promise<INombreModificadoResponse> {
    const data = await this.exectueOrderAggregateRoot(command);

    return { success: data ? true : false, data }
}


//Manda a llamar al al servicio y asi usar sus metodos 
private exectueOrderAggregateRoot(
    entity: EmpleadoDomainEntity,
): Promise<EmpleadoDomainEntity | null> {
    return this.aggregateRoot.BuscarEmpleado(entity)
}
}


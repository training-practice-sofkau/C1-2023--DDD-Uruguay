import { Body, Controller, Post } from '@nestjs/common';
import { CrearStaffDeportivoUseCase } from '../../application/use-cases/staff-deportivo/crear-staff-deportivo.use.case';
import { CrearStaffDeportivoCommand } from '../utils/commands/staffDeportivo/crear-staff-deportivo.commands';
import { DocumentoModificadoEventPublisher, EmpleadoBuscadoEventPublisher, SalarioModificadoEventPublisher, TipoEmpleadoModificadoEventPublisher, TramiteBuscadoEventPublisher } from '../../domain/events/publishers';
import { EmpleadoService } from '../persistence/services/empleado.service';
import { EmpleadoAgregadoEventPublisher } from '../../domain/events/publishers/staff-deporitvo/empleado-agregado.event-publisher';
import { NombreModificadoEventPublisher } from '../../domain/events/publishers/empleado/nombre-modificado.event-publisher';
import { AgregarEmpleadoCommand } from '../utils/commands/staffDeportivo/empleado/agregar-empleado.commands';
import { CrearEmpleadoUseCase } from '../../application/use-cases/staff-deportivo/crear-empleado.use-case';

@Controller('empleado')
export class EmpleadoController {
    
    constructor(
        private readonly empleadoService: EmpleadoService,
        private readonly emppleadoAgregadoEventPublisher: EmpleadoAgregadoEventPublisher,
        private readonly empleadoBuscadoEven: EmpleadoBuscadoEventPublisher,
        private readonly nombremodificadoEvent: NombreModificadoEventPublisher,
        private readonly documentoModificadoEvent: DocumentoModificadoEventPublisher,
        private readonly tipoEmpleadoModificadoEvent: TipoEmpleadoModificadoEventPublisher,
        private readonly salarioModificadoEvent: SalarioModificadoEventPublisher,
    ) {}

    @Post('/add-client')
    async agregarEmpleado(@Body() command: AgregarEmpleadoCommand) {
        const useCase = new CrearEmpleadoUseCase(
            this.empleadoService,
            this.emppleadoAgregadoEventPublisher,
        );
        return await useCase.execute(command);
    }

    @Post('/add-client')
    async addClient(@Body() command: CrearStaffDeportivoCommand) {
        const useCase = new CrearStaffDeportivoUseCase(
            this.staffDeportivoService,
            this.staffDeportivoCreadoEventPublisher,
            this.tamiteBuscadoEvent,
            this.empleadoBuscadoEvent
        );
        return await useCase.execute(command);
    }

  
}

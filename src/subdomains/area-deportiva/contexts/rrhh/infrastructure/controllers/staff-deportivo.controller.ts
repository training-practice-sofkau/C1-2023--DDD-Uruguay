import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { StaffDeportivoService } from '../persistence/services/staff-deportivo.service';
import { EmpleadoAgregadoEventPublisher } from '../../domain/events/publishers/staff-deporitvo/empleado-agregado.event-publisher';
import { StaffDeportivoCreadoEventPublisher } from '../../domain/events/publishers/staff-deporitvo/staff-depotivo-creado.event-publisher';
import { CrearStaffDeportivoUseCase } from '../../application/use-cases/staff-deportivo/crear-staff-deportivo.use.case';
import { CrearStaffDeportivoCommand } from '../utils/commands/staffDeportivo/crear-staff-deportivo.commands';
import { EmpleadoBuscadoEventPublisher, TramiteBuscadoEventPublisher } from '../../domain/events/publishers';

@Controller('order')
export class OrderController {
    constructor(
        private readonly staffDeportivoService: StaffDeportivoService,
        private readonly staffDeportivoCreadoEventPublisher: StaffDeportivoCreadoEventPublisher,
        private readonly tamiteBuscadoEvent : TramiteBuscadoEventPublisher,
        private readonly empleadoBuscadoEvent : EmpleadoBuscadoEventPublisher,
    ) {}

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

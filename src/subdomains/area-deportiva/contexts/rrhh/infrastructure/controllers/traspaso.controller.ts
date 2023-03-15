import { Body, Controller, Post } from '@nestjs/common';
import { EmpleadoBuscadoEventPublisher } from '../../domain/events/publishers';
import { TraspasoService } from '../persistence/services/traspaso.service';
import { CrearTraspasoUseCase } from '../../application/use-cases/secretaria/crear-traspaso.use-case';
import { NegociarTraspasoPublisher } from '../messaging/publishers/secretaria/traspaso/negociar-traspaso-publisher';
import { NegociarTraspasoCommand } from '../utils/commands/secretaria/traspaso/negociar-traspaso-commands';
import { BuscarTraspasoUseCase } from '../../application/use-cases/secretaria/buscar-traspaso.use-case';
import { BuscarTraspasoCommand } from '../utils/commands/secretaria/traspaso/buscar-traspaso.commands';
import { BuscarTraspasoPublisher } from '../messaging/publishers/secretaria/traspaso/buscar-traspaso.publisher';

@Controller('traspaso')
export class TraspasoController {
    constructor(
        private readonly traspasoService: TraspasoService,

        private readonly traspasoBuscadoEvent : BuscarTraspasoPublisher,
        
        private readonly traspasoNegociadoEventPublisher: NegociarTraspasoPublisher,
    ) {}

    @Post('/crear')
    async crearStaffDeportivo(@Body() command: NegociarTraspasoCommand) {
        const useCase = new CrearTraspasoUseCase(
            this.traspasoService,
            this.traspasoNegociadoEventPublisher,
        );
        return await useCase.execute(command);
    }

    @Post('/modificar-state')
    async buscarTraspaso(@Body() command: BuscarTraspasoCommand) {
        const useCase = new BuscarTraspasoUseCase(
            this.traspasoService,
            this.traspasoBuscadoEvent,
        );
        return await useCase.execute(command);
    }

  
}
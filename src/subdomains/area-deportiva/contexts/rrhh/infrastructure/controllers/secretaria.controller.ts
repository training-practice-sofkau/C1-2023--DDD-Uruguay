import { Body, Controller, Post } from '@nestjs/common';
import { TramiteAgregadoEventPublisher } from '../../domain/events/publishers/staff-deporitvo/tramite-agregado.event-publisher';
import { SecretariaService } from '../persistence/services/secretaria.service';
import { CrearSecretariaUseCase } from '../../application/use-cases/secretaria/crear-secretaria.use-case';
import {  CrearSecretariaCommand } from '../utils/commands/secretaria/crear-secretaria.commands';
import { secretariaCreadaEventPublisher } from '../../domain/events/publishers/secretaria/secretaria-creada.event-publisher';
import { ContratoBuscadaEventPublisher, CesionBuscadaEventPublisher, TraspasoBuscadaEventPublisher } from '../../domain/events/publishers';

@Controller('secretaria')
export class SecretariaController {
    constructor(
        private readonly serviceSecretaria: SecretariaService,
        
        private readonly secretariaCreadaEvent : secretariaCreadaEventPublisher,
        private readonly contratoBuscadoEvent : ContratoBuscadaEventPublisher,
        private readonly cesionBuscadaEvent : CesionBuscadaEventPublisher,
        private readonly traspasoBuscadoEvent : TraspasoBuscadaEventPublisher,
    ) {}

    @Post('/crear')
    async crearTramite(@Body() command: CrearSecretariaCommand) {
        const useCase = new CrearSecretariaUseCase(
            this.serviceSecretaria,
            this.secretariaCreadaEvent,
            this.contratoBuscadoEvent,
            this.cesionBuscadaEvent,
            this.traspasoBuscadoEvent,
        );
        return await useCase.execute(command);
    }

  
}

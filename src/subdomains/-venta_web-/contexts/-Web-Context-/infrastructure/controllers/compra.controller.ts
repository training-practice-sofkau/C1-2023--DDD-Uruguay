import { Body, Controller, Post } from '@nestjs/common';
import { CreateClienteCommand } from '../utils/commands/createCliente.command';
import { CreateClienteUseCase, CreateCompraUseCase, CreateCursoUseCase, UpdateClientPhoneUseCase, UpdateCursoCostoUseCase } from '../../application/use-cases/compra';
import { ClienteCreadoEventPublisher } from '../../domain/events/publishers/compra/cliente-creado.event-publisher';
import { ICompraService } from '../../domain/services/compra.service';
import { ICreateCompraCommand } from '../utils/commands/compra/createCompra.command';
import { CompraCreadaEventPublisher } from '../../domain/events/publishers/compra/compra-creada.event-publisher';
import { IClienteService } from '../../domain/services/cliente.service';
import { ICursoService } from '../../domain/services/curso.service';
import { CursoCreadoEventPublisher } from '../../domain/events/publishers/compra/curso-creado.event-publisher';
import { ICreateCursoCommand } from '../utils/commands/compra/createCurso.command';
import { IUpdatePhoneCommand } from '../utils/commands/updatePhone.command';
import { UpdatePhoneEventPublisher } from '../../domain/events/publishers/compra/cliente/update-phone.event-publisher';
import { IUpdateCostoCommand } from '../utils/commands/compra/curso/updateCosto.command';
import { UpdateCostoCursoEventPublisher } from '../../domain/events/publishers/compra/curso/update-costo.event-publisher';

@Controller('compra')
export class CompraController {


    constructor(
        private readonly compraService: ICompraService,
        private readonly compraCreadaEventPublisher : CompraCreadaEventPublisher,

        private readonly clienteService: IClienteService,
        private readonly clienteCreadoEventPublisher: ClienteCreadoEventPublisher,
        private readonly updatePhoneEventPublisher: UpdatePhoneEventPublisher,

        private readonly cursoService: ICursoService,
        private readonly cursoCreadoEventPublisher: CursoCreadoEventPublisher,
        private readonly updateCostoCursoEventPublisher: UpdateCostoCursoEventPublisher


        
    ) {}


    //CREATES

    @Post('/crear-compra')
    async crearCompra(@Body() command: ICreateCompraCommand ) {
        const useCase = new CreateCompraUseCase(
            this.compraService,
            this.compraCreadaEventPublisher,
        );
        return await useCase.execute(command);
    }
    
    @Post('/crear-cliente')
    async crearCliente(@Body() command: CreateClienteCommand) {
        const useCase = new CreateClienteUseCase(
            this.clienteService,
            this.clienteCreadoEventPublisher,
        );
        return await useCase.execute(command);
    }
 
    @Post('/crear-curso')
    async crearCurso(@Body() command: ICreateCursoCommand ) {
        const useCase = new CreateCursoUseCase(
            this.cursoService,
            this.cursoCreadoEventPublisher,
        );
        return await useCase.execute(command);
    }

    //UPDATES

    @Post('/update-phone')
    async updatePhoneCliente(@Body() command: IUpdatePhoneCommand ) {
        const useCase = new UpdateClientPhoneUseCase(
            this.clienteService,
            this.updatePhoneEventPublisher,
        );
        return await useCase.execute(command);
    }

    @Post('/update-costo-curso')
    async updateCostoCurso(@Body() command: IUpdateCostoCommand ) {
        const useCase = new UpdateCursoCostoUseCase(
            this.cursoService,
            this.updateCostoCursoEventPublisher,
        );
        return await useCase.execute(command);
    }

}
  



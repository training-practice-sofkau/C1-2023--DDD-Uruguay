import { Body, Controller, Post } from '@nestjs/common';
import { CreateClienteCommand } from '../utils/commands/createCliente.command';
import { CreateClienteUseCase, CreateCompraUseCase, CreateCursoUseCase, ObtenerClienteUseCase, ObtenerCursoUseCase, UpdateClientPhoneUseCase, UpdateCursoCostoUseCase } from '../../application/use-cases/compra';
import { ICompraService } from '../../domain/services/compra.service';
import { ICreateCompraCommand } from '../utils/commands/compra/createCompra.command';
import { IClienteService } from '../../domain/services/cliente.service';
import { ICursoService } from '../../domain/services/curso.service';
import { ICreateCursoCommand } from '../utils/commands/compra/createCurso.command';
import { IUpdatePhoneCommand } from '../utils/commands/updatePhone.command';
import { IUpdateCostoCommand } from '../utils/commands/compra/curso/updateCosto.command';
import { IObtenerCursoCommand } from '../utils/commands/compra/curso/obtenerCurso.command';
import { IObtenerClienteCommand } from '../utils/commands/ObtenerCliente.command';
import { CreateClientePublisher, CreateCompraPublisher, CreateCursoPublisher, ObtenerClientePublisher, ObtenerCursoPublisher, UpdateCostoPublisher, UpdatePhonePublisher } from '../messaging/publisher';

@Controller('compra') 
export class CompraController {


    constructor(
        private readonly compraService: ICompraService,
        private readonly compraCreadaPublisher : CreateCompraPublisher,

        private readonly clienteService: IClienteService,
        private readonly clienteCreadoPublisher: CreateClientePublisher,
        private readonly updatePhonePublisher: UpdatePhonePublisher,
        private readonly clienteConseguidoPublisher: ObtenerClientePublisher,

        private readonly cursoService: ICursoService,
        private readonly cursoCreadoPublisher: CreateCursoPublisher,
        private readonly updateCostoCursoPublisher: UpdateCostoPublisher,
        private readonly cursoConseguidoPublisher: ObtenerCursoPublisher

        
    ) {}


    //CREATES

    @Post('/crear-compra')
    async crearCompra(@Body() command: ICreateCompraCommand ) {
        const useCase = new CreateCompraUseCase(
            this.compraService,
            this.compraCreadaPublisher,
        );
        return await useCase.execute(command);
    }
    
    @Post('/crear-cliente')
    async crearCliente(@Body() command: CreateClienteCommand) {
        const useCase = new CreateClienteUseCase(
            this.clienteService,
            this.clienteCreadoPublisher,
        );
        return await useCase.execute(command);
    }
 
    @Post('/crear-curso')
    async crearCurso(@Body() command: ICreateCursoCommand ) {
        const useCase = new CreateCursoUseCase(
            this.cursoService,
            this.cursoCreadoPublisher,
        );
        return await useCase.execute(command);
    }

    //UPDATES

    @Post('/update-phone')
    async updatePhoneCliente(@Body() command: IUpdatePhoneCommand ) {
        const useCase = new UpdateClientPhoneUseCase(
            this.clienteService,
            this.updatePhonePublisher,
        );
        return await useCase.execute(command);
    }


    @Post('/update-costo-curso')
    async updateCostoCurso(@Body() command: IUpdateCostoCommand ) {
        const useCase = new UpdateCursoCostoUseCase(
            this.cursoService,
            this.updateCostoCursoPublisher,
        );
        return await useCase.execute(command);
    }

    //OBTENER

    @Post('/obtener-curso')
    async obtenerCurso(@Body() command: IObtenerCursoCommand ) {
        const useCase = new ObtenerCursoUseCase(
            this.cursoService,
            this.cursoConseguidoPublisher,
        );
        return await useCase.execute(command);
    }

    
    @Post('/obtener-cliente')
    async obtenerCliente(@Body() command: IObtenerClienteCommand ) {
        const useCase = new  ObtenerClienteUseCase(
            this.clienteService,
            this.clienteConseguidoPublisher,
        );
        return await useCase.execute(command);
    }
    
    /*
    CREAR CUPON
    UPDATE PORCENTAJE CUPON
    OBTENER CUPON
    */
}
  



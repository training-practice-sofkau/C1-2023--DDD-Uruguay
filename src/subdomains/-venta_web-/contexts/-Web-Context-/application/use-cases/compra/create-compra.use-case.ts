import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { CompraAggregate, CompraCreadaEventPublisher, CompraDomainEntity, ICompraCreadaResponse, ICompraDomainEntityInterface, ICompraService, ICreateCompraMethod, UuidValueObject } from "../../../domain";
import { ObtenerClienteUseCase } from "./obtener-cliente.use-case";

export class CreateCompraUseCase<

//MI CASO DE USO NECESITA EL COMANDO Y LA RESPONSE.
Command extends ICreateCompraMethod  = ICreateCompraMethod ,
Response extends ICompraCreadaResponse = ICompraCreadaResponse>

extends ValueObjectErrorHandler //EXTIENDO PARA EL MANEJO DE ERRORES
implements IUseCase<Command, Response>{ //IMPLEMENTO LA INTERFAZ PARA EJECUTAR EL CASO DE USO

//LO PRIMERO QUE NECESITO ES EL AGREGADO ROOT 
//Y LOS CASOS DE USO QUE EJECUTAN EL METODO QUE ME PERMITE OBTENER LAS ENTIDADES
private readonly compraAggregate: CompraAggregate
private readonly obtenerClienteUseCase : ObtenerClienteUseCase
// private readonly obtenerCursoeUseCase : ObtenerCursoUseCase
// private readonly obtenerCuponeUseCase : ObtenerCuponUseCase

//INYECTO EL SERVICIO Y EL EVENTO NECESARIO
constructor(private readonly compraService: ICompraService, private readonly compraCreadaEventPublisher: CompraCreadaEventPublisher) {
    super();
    this.compraAggregate = new CompraAggregate({ compraService, compraCreadaEventPublisher })
}

/*
Una función asíncrona es una función que devuelve una Promesa y puede
utilizar la palabra clave await para esperar a que se resuelva la Promesa
antes de continuar con la ejecución del código.
*/
async execute(command?: Command): Promise<Response> {
    const data = await this.executeCompraAggregate(command)
    return { success: data ? true : false, data } as unknown as Response
}

//METODO PARA EJECUTAR EL METODO DE MI AGREGADO
private executeCompraAggregate(compra: ICompraDomainEntityInterface ): Promise<CompraDomainEntity | null> {
    return this.compraAggregate.createCompra(compra as ICreateCompraMethod)
}


private  async createEntity(command: Command): Promise<CompraDomainEntity> {

    const clienteCompra = this.obtenerClienteUseCase.execute({idCliente : command.idCliente})
    //const cursoCompra = this.obtenerCursoUseCase.execute({idCurso : command.idCurso}) 

    return new CompraDomainEntity({ clienteCompra : (await clienteCompra).data})
}


async executeCommand(command: Command): Promise<CompraDomainEntity | null> {

    const compraEntity = this.createEntity(command);

    return this.executeCompraAggregate(compraEntity as CompraDomainEntity);
}


}

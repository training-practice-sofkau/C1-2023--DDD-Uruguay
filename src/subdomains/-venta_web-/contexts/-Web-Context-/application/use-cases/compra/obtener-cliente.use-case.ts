import { IUseCase, ValueObjectErrorHandler } from "src/libs";
import { IObtenerClienteMethod } from "../../../domain/interfaces/commands/compra/cliente/ObtenerCliente.command";
import { IClienteConseguidoResponse } from "../../../domain/interfaces/responses/clienteConseguido.response";
import { ClienteDomainEntity, CompraAggregate, ICompraService } from "../../../domain";
import { ClienteConseguidoEventPublisher } from "../../../domain/events/publishers/compra/cliente/cliente-conseguido.event-publisher";


export class ObtenerClienteUseCase<

    //MI CASO DE USO NECESITA EL COMANDO Y LA RESPONSE.
    Command extends IObtenerClienteMethod = IObtenerClienteMethod,
    Response extends IClienteConseguidoResponse = IClienteConseguidoResponse>

    extends ValueObjectErrorHandler //EXTIENDO PARA EL MANEJO DE ERRORES
    implements IUseCase<Command, Response>{ //IMPLEMENTO LA INTERFAZ PARA EJECUTAR EL CASO DE USO

    //LO PRIMERO QUE NECESITO ES EL AGREGADO ROOT
    private readonly compraAggregate: CompraAggregate;

    //INYECTO EL SERVICIO Y EL EVENTO NECESARIO
    constructor(private readonly compraService: ICompraService, private readonly clienteConseguidoEventPublisher: ClienteConseguidoEventPublisher) {
        super();
        this.compraAggregate = new CompraAggregate({ compraService, clienteConseguidoEventPublisher })
    }

     /*
    Una función asíncrona es una función que devuelve una Promesa y puede
    utilizar la palabra clave await para esperar a que se resuelva la Promesa
    antes de continuar con la ejecución del código.
    */
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<ClienteDomainEntity | null> {
        return this.compraAggregate.obtenerCliente(command.idCliente)
    }

}

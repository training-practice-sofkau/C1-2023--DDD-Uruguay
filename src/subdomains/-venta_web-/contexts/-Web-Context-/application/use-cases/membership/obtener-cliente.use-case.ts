import { IUseCase, ValueObjectErrorHandler } from "src/libs";
import { IObtenerClienteMethod } from "../../../domain/interfaces/commands/cliente/ObtenerCliente.command";
import { IClienteConseguidoResponse } from "../../../domain/interfaces/responses/clienteConseguido.response";
import { ClienteDomainEntity, IMembershipService, MembershipAggregate } from "../../../domain";
import { ClienteConseguidoEventPublisher } from "../../../domain/events/publishers/compra/cliente/cliente-conseguido.event-publisher";

export class ObtenerClienteUseCase <

//MI CASO DE USO NECESITA EL COMANDO Y LA RESPONSE.
Command extends IObtenerClienteMethod = IObtenerClienteMethod,
Response extends IClienteConseguidoResponse = IClienteConseguidoResponse>

extends ValueObjectErrorHandler //EXTIENDO PARA EL MANEJO DE ERRORES
implements IUseCase<Command, Response>{ //IMPLEMENTO LA INTERFAZ PARA EJECUTAR EL CASO DE USO

//LO PRIMERO QUE NECESITO ES EL AGREGADO ROOT
private readonly membershipAggregate: MembershipAggregate;

//INYECTO EL SERVICIO Y EL EVENTO NECESARIO
constructor(private readonly membershipService: IMembershipService, private readonly clienteConseguidoEventPublisher: ClienteConseguidoEventPublisher) {
    super();
    this.membershipAggregate = new MembershipAggregate({ membershipService, clienteConseguidoEventPublisher })
}

/*
ESTA FUNCION ASINCRONA DEVUELVE UNA PROMESA Y UTILIZA LA PALABRA CLAVE
"await" PARA ESPERAR A QUE SE RESUELVA LA PROMESA
ANTES DE CONTINUAR CON LA EJECUCION DE CODIGO
*/
async execute(command?: Command): Promise<Response> {
    const data = await this.executeCommand(command);

    return { success: data ? true : false, data } as unknown as Response
}


private async executeCommand(command: Command): Promise<ClienteDomainEntity | null> {
    return this.membershipAggregate.obtenerCliente(command.idCliente)
}

}

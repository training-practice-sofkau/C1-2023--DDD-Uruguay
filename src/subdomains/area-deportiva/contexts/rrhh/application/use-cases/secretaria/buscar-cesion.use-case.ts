import { SecretariaAggregate } from '../../../domain/aggregates/secretaria/secretaria.aggregate';
import { CesionBuscadaEventPublisher } from '../../../domain/events/publishers/secretaria/cesion-buscada.event-publisher';
import { ISecretariaDomainService } from '../../../domain/services/secretaria/secretaria.domain-service';
import { IBuscarCesionCommands } from '../../../domain/interfaces/commands/secretaria/buscar-cesion.commands';
import { ICesionBuscadaResponse } from '../../../domain/interfaces/responses/secretaria/cesion-buscada.response';
import { IUseCase, ValueObjectErrorHandler } from 'src/libs';

export class BuscarCesionUseCase extends ValueObjectErrorHandler
implements IUseCase<IBuscarCesionCommands, ICesionBuscadaResponse> {

private readonly aggregateRoot: SecretariaAggregate;

constructor(
    private readonly secretariaService: ISecretariaDomainService,
    private readonly cesionBuscadaEvent: CesionBuscadaEventPublisher,
) {
    super();
    this.aggregateRoot = new SecretariaAggregate({ secretariaService, cesionBuscadaEvent });
}

    //Ejecutar el comando , usando otra funcion para crear lo que necesita el comando 
    async execute(command?: IBuscarCesionCommands): Promise<ICesionBuscadaResponse> {
        const data = await this.aggregateRoot.BuscarCesion(command);

        return { success: data ? true : false, data }
    }
}


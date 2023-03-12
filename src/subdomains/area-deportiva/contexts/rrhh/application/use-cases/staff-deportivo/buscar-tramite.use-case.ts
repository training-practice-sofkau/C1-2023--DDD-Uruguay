import { ValueObjectErrorHandler, IUseCase } from "src/libs";
import { TramiteDomainEntity } from '../../../domain/entities/tramite/tramite.entity.interface';
import { TramiteBuscadoEventPublisher } from '../../../domain/events/publishers/staff-deporitvo/tramite-buscado.event-publisher';
import { IStaffDeportivoDomainService } from '../../../domain/services/staff-Deportivo/staff-deportivo.domain-service';
import { ItramiteBuscadoResponse } from '../../../domain/interfaces/responses/staff-deportivo/tamite-agregado.response';
import { StaffDeportivoAggregate } from "../../../domain";
import { IBuscarTramiteCommands } from '../../../domain/interfaces/commands/staff-deportivo/buscar-tramite.commands';

export class BuscarTramiteUseCase extends ValueObjectErrorHandler
    implements IUseCase<IBuscarTramiteCommands, ItramiteBuscadoResponse> {

    private readonly aggregateRoot: StaffDeportivoAggregate;

    constructor(
        private readonly staffDeportivoService: IStaffDeportivoDomainService,
        private readonly tamiteBuscadoEvent: TramiteBuscadoEventPublisher,
    ) {
        super();
        this.aggregateRoot = new StaffDeportivoAggregate({ staffDeportivoService, tamiteBuscadoEvent });
    }

    //Ejecutar el comando , usando otra funcion para crear lo que necesita el comando 
    async execute(command?: IBuscarTramiteCommands): Promise<ItramiteBuscadoResponse> {
        const data = await this.exectueOrderAggregateRoot(command);

        return { success: data ? true : false, data }
    }


    //Manda a llamar al al servicio y asi usar sus metodos 
    private exectueOrderAggregateRoot(
        entity: TramiteDomainEntity,
    ): Promise<TramiteDomainEntity | null> {
        return this.aggregateRoot.BuscarTramite(entity)
    }
}



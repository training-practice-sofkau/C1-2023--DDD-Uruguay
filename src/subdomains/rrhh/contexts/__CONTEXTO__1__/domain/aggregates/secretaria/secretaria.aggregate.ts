import { SecretariaDomainEntity } from "../../entities/secretaria/secretaria.domain-entity";
import { CesionNegociadoEventPublisher } from "../../events/publishers/secretaria/cesion-negociado.event-publisher";
import { ContratoNegociadoEventPublisher } from "../../events/publishers/secretaria/contrato-negociado.event-publisher";
import { secretariaCreadaEventPublisher } from "../../events/publishers/secretaria/secretaria-creada.event-publisher";
import { TraspasoNegociadoEventPublisher } from "../../events/publishers/secretaria/traspaso-negociado.event-publisher";
import { INegociarCesionCommands, INegociarContratoCommands, INegociarTraspasoCommands } from "../../interfaces";
import { ICrearSecretariaCommands } from "../../interfaces/commands/secretaria/crear-secretaria.commands.interface";
import { ICesionDomainService, ISecretariaDomainService, ITraspasoDomainService } from "../../services";
import { IContratoDomainService } from '../../services/secretaria/contrato.domain-service';

export class SecretariaAggregate implements ISecretariaDomainService{

    //services
    private readonly traspasoService?: ITraspasoDomainService;
    private readonly cesionService?: ICesionDomainService;
    private readonly contratoService?: IContratoDomainService;
    //events
    private readonly cesionNegociadaEvent?: CesionNegociadoEventPublisher;
    private readonly traspasoNegociadoEvent?: TraspasoNegociadoEventPublisher;
    private readonly contratoNegocidadoEvent?: ContratoNegociadoEventPublisher;
    private readonly secretariaCreadaEvent?: secretariaCreadaEventPublisher;


    constructor(
        {
            //service
            traspasoService,
            cesionService,
            contratoService,

            //events
            cesionNegociadaEvent,
            traspasoNegociadoEvent,
            contratoNegocidadoEvent,
            secretariaCreadaEvent,
        }: {
            //services
            traspasoService?: ITraspasoDomainService;
            cesionService?: ICesionDomainService;
            contratoService?: IContratoDomainService;

            //events
            cesionNegociadaEvent?: CesionNegociadoEventPublisher;
            traspasoNegociadoEvent?: TraspasoNegociadoEventPublisher;
            contratoNegocidadoEvent?: ContratoNegociadoEventPublisher;
            secretariaCreadaEvent?: secretariaCreadaEventPublisher;
        }
    ) {
        //services
        this.traspasoService = traspasoService;
        this.cesionService = cesionService;
        this.contratoService = contratoService;

        //events
        this.cesionNegociadaEvent = cesionNegociadaEvent;
        this.traspasoNegociadoEvent = traspasoNegociadoEvent;
        this.contratoNegocidadoEvent = contratoNegocidadoEvent;
        this.secretariaCreadaEvent = secretariaCreadaEvent;

    }


    CrearSecretaria(secretaria: ICrearSecretariaCommands): Promise<SecretariaDomainEntity> {
        throw new Error("Method not implemented.");
    }
    NegociarCesion(cesion: INegociarCesionCommands): Promise<SecretariaDomainEntity> {
        throw new Error("Method not implemented.");
    }
    NegociarContrato(contrato: INegociarContratoCommands): Promise<SecretariaDomainEntity> {
        throw new Error("Method not implemented.");
    }
    NegociarTraspaso(traspaso: INegociarTraspasoCommands): Promise<SecretariaDomainEntity> {
        throw new Error("Method not implemented.");
    }

}

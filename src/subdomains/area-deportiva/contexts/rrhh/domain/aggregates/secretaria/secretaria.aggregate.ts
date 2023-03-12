import { AggregateRootException } from "src/libs";
import { SecretariaDomainEntity } from "../../entities/secretaria/secretaria.domain-entity";
import { CesionNegociadoEventPublisher } from "../../events/publishers/secretaria/cesion-negociado.event-publisher";
import { ContratoNegociadoEventPublisher } from "../../events/publishers/secretaria/contrato-negociado.event-publisher";
import { secretariaCreadaEventPublisher } from "../../events/publishers/secretaria/secretaria-creada.event-publisher";
import { TraspasoNegociadoEventPublisher } from "../../events/publishers/secretaria/traspaso-negociado.event-publisher";
import { IModificarCostoCommands, IModificarFechaCommands, IModificarStateCommands, INegociarCesionCommands, INegociarContratoCommands, INegociarTraspasoCommands } from "../../interfaces";
import { ICrearSecretariaCommands } from "../../interfaces/commands/secretaria/crear-secretaria.commands.interface";
import { ICesionDomainService, ITraspasoDomainService } from "../../services";
import { IContratoDomainService } from '../../services/secretaria/contrato.domain-service';
import { ISecretariaDomainService } from '../../services/secretaria/secretaria.domain-service';
import { CesionDomainEntity } from '../../entities/cesion/cesion.domain-entity';
import { ContratoDomainEntity } from '../../entities/contrato/contrato.domain-entity';
import { TraspasoDomainEntity } from '../../entities/traspaso/traspaso.domain-entity';
import { CostoModificadoEventPublisher } from "../../events/publishers/cesion/costo-modificado.event-publisher";
import { IModificarEquipoCommands } from "../../interfaces/commands/shared/modificar-equipo-nuevo.commands.interface";
import { StateModificadoEventPublisher } from '../../events/publishers/cesion/state-modificado.event-publisher';
import { FechaModificadaEventPublisher } from '../../events/publishers/cesion/fecha-modificada.event-publisher';
import { EquipoModificadoEventPublisher } from '../../events/publishers/cesion/equipo-modificado.event-publisher';
import { TraspasoBuscadaEventPublisher } from "../../events/publishers/secretaria/traspaso-buscado.event-publisher";
import { ContratoBuscadaEventPublisher } from '../../events/publishers/secretaria/contrato-buscado.event-publisher';
import { CesionBuscadaEventPublisher } from "../../events/publishers/secretaria/cesion-buscada.event-publisher";

export class SecretariaAggregate implements ISecretariaDomainService{

    //services
    private readonly secretariaService?: ISecretariaDomainService;
    private readonly traspasoService?: ITraspasoDomainService;
    private readonly cesionService?: ICesionDomainService;
    private readonly contratoService?: IContratoDomainService;
    //events
    private readonly secretariaCreadaEvent?: secretariaCreadaEventPublisher;

    //cesion
    private readonly cesionNegociadaEvent?: CesionNegociadoEventPublisher;
    private readonly cesionCostoModificadoEvent?: CostoModificadoEventPublisher;
    private readonly cesionStateModificadoEvent?: StateModificadoEventPublisher;
    private readonly cesionFechaModificadaEvent?: FechaModificadaEventPublisher;
    private readonly cesionEquipoModificadaEvent?: EquipoModificadoEventPublisher;
    private readonly cesionBuscadaEvent?: CesionBuscadaEventPublisher;

    //traspaso
    private readonly traspasoNegociadoEvent?: TraspasoNegociadoEventPublisher;
    private readonly traspasoCostoModificadoEvent?: CostoModificadoEventPublisher;
    private readonly traspasoStateModificadoEvent?: StateModificadoEventPublisher;
    private readonly traspasoFechaModificadoEvent?: FechaModificadaEventPublisher;
    private readonly traspasoEquipoModificadaEvent?: EquipoModificadoEventPublisher;
    private readonly traspasoBuscadoEvent?: TraspasoBuscadaEventPublisher;
    

    //contrato
    private readonly contratoNegocidadoEvent?: ContratoNegociadoEventPublisher;
    private readonly contratoCostoModificadoEvent?: CostoModificadoEventPublisher;
    private readonly contratoStateModificadoEvent?: StateModificadoEventPublisher;
    private readonly contratoFechaModificadoEvent?: FechaModificadaEventPublisher;
    private readonly contratoBuscadoEvent?: ContratoBuscadaEventPublisher;

    


    constructor(
        {
            //service
            secretariaService,
            traspasoService,
            cesionService,
            contratoService,
            

            //events
            secretariaCreadaEvent,
            //cesion
            cesionNegociadaEvent,
            cesionCostoModificadoEvent,
            cesionStateModificadoEvent,
            cesionFechaModificadaEvent,
            cesionEquipoModificadaEvent,
            cesionBuscadaEvent,
            //traspaso
            traspasoNegociadoEvent,
            traspasoCostoModificadoEvent,
            traspasoStateModificadoEvent,
            traspasoFechaModificadoEvent,
            traspasoEquipoModificadaEvent,
            traspasoBuscadoEvent,
            //contrato
            contratoNegocidadoEvent,
            contratoCostoModificadoEvent,
            contratoStateModificadoEvent,
            contratoFechaModificadoEvent,
            contratoBuscadoEvent,
        }: {
            //services
            secretariaService?: ISecretariaDomainService
            traspasoService?: ITraspasoDomainService;
            cesionService?: ICesionDomainService;
            contratoService?: IContratoDomainService;

            //events
            secretariaCreadaEvent?: secretariaCreadaEventPublisher;

            //cesion
            cesionNegociadaEvent?: CesionNegociadoEventPublisher;
            cesionCostoModificadoEvent?: CostoModificadoEventPublisher;
            cesionStateModificadoEvent?: StateModificadoEventPublisher;
            cesionFechaModificadaEvent?: FechaModificadaEventPublisher;
            cesionEquipoModificadaEvent?: EquipoModificadoEventPublisher;
            cesionBuscadaEvent?: CesionBuscadaEventPublisher;

            //traspaso
            traspasoNegociadoEvent?: TraspasoNegociadoEventPublisher;
            traspasoCostoModificadoEvent?: CostoModificadoEventPublisher;
            traspasoStateModificadoEvent?: StateModificadoEventPublisher;
            traspasoFechaModificadoEvent?: FechaModificadaEventPublisher;
            traspasoEquipoModificadaEvent?: EquipoModificadoEventPublisher;
            traspasoBuscadoEvent?: TraspasoBuscadaEventPublisher;

            //contrato
            contratoNegocidadoEvent?: ContratoNegociadoEventPublisher;
            contratoCostoModificadoEvent?: CostoModificadoEventPublisher;
            contratoStateModificadoEvent?: StateModificadoEventPublisher;
            contratoFechaModificadoEvent?: FechaModificadaEventPublisher;
            contratoBuscadoEvent?: ContratoBuscadaEventPublisher;


        }
    ) {
        //services
        this.secretariaService = secretariaService;
        this.traspasoService = traspasoService;
        this.cesionService = cesionService;
        this.contratoService = contratoService;

        //events
        this.secretariaCreadaEvent = secretariaCreadaEvent;

        //cesion
        this.cesionNegociadaEvent = cesionNegociadaEvent;
        this.cesionCostoModificadoEvent = cesionCostoModificadoEvent;
        this.cesionStateModificadoEvent = cesionStateModificadoEvent;
        this.cesionFechaModificadaEvent = cesionFechaModificadaEvent;
        this.cesionEquipoModificadaEvent = cesionEquipoModificadaEvent;
        this.cesionBuscadaEvent = cesionBuscadaEvent;
        
        //traspaso
        this.traspasoNegociadoEvent = traspasoNegociadoEvent;
        this.traspasoCostoModificadoEvent = traspasoCostoModificadoEvent;
        this.traspasoStateModificadoEvent = traspasoStateModificadoEvent;
        this.traspasoFechaModificadoEvent = traspasoFechaModificadoEvent;
        this.traspasoEquipoModificadaEvent = traspasoEquipoModificadaEvent;
        this.traspasoBuscadoEvent = traspasoBuscadoEvent;
        
        //contrato
        this.contratoNegocidadoEvent = contratoNegocidadoEvent;
        this.contratoCostoModificadoEvent = contratoCostoModificadoEvent;
        this.contratoStateModificadoEvent = contratoStateModificadoEvent;
        this.contratoFechaModificadoEvent = contratoFechaModificadoEvent;
        this.contratoBuscadoEvent = contratoBuscadoEvent;

    }
    async BuscarCesion(cesion: CesionDomainEntity): Promise<CesionDomainEntity> {
       if(!this.secretariaService)
        throw new AggregateRootException('Servicio secretaria indefinido');
       if(!this.cesionBuscadaEvent) 
        throw new AggregateRootException('Evento buscar cesion indefinido');
    
        const result = await this.secretariaService.BuscarCesion(cesion);
        this.cesionBuscadaEvent.response = result;
        this.cesionBuscadaEvent.publish();
        return result;
    }
    async BuscarTraspaso(traspaso: TraspasoDomainEntity): Promise<TraspasoDomainEntity> {
        if(!this.secretariaService) throw new AggregateRootException('Servicio secretaria indefinido');
        if(!this.traspasoBuscadoEvent)  throw new AggregateRootException('Evento buscar traspaso indefinido');
     
         const result = await this.secretariaService.BuscarTraspaso(traspaso);
         this.traspasoBuscadoEvent.response = result;
         this.traspasoBuscadoEvent.publish();
         return result;
    }
    async BuscarContrato(contrato: ContratoDomainEntity): Promise<ContratoDomainEntity> {
        if(!this.secretariaService) throw new AggregateRootException('Servicio secretaria indefinido');
        if(!this.contratoBuscadoEvent)  throw new AggregateRootException('Evento buscar contrato indefinido');
     
         const result = await this.secretariaService.BuscarContrato(contrato);
         this.contratoBuscadoEvent.response = result;
         this.contratoBuscadoEvent.publish();
         return result;
    }

    async CrearSecretaria(secretaria: ICrearSecretariaCommands): Promise<SecretariaDomainEntity> {
        if(!this.secretariaService)
        throw new AggregateRootException('Servicio secretaria indefinido')

        if(!this.secretariaCreadaEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.secretariaService.CrearSecretaria(secretaria);
        this.secretariaCreadaEvent.response = result;
        this.secretariaCreadaEvent.publish();
        return result;
    }

    async NegociarCesion(cesion: CesionDomainEntity): Promise<CesionDomainEntity> {
        if(!this.secretariaService)
        throw new AggregateRootException('Servicio secretaria indefinido')

        if(!this.cesionNegociadaEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.secretariaService.NegociarCesion(cesion);
        this.cesionNegociadaEvent.response = result;
        this.cesionNegociadaEvent.publish();
        return result;
    }

    async NegociarContrato(contrato: ContratoDomainEntity): Promise<ContratoDomainEntity> {
        if(!this.secretariaService)
        throw new AggregateRootException('Servicio secretaria indefinido')

        if(!this.contratoNegocidadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.secretariaService.NegociarContrato(contrato);
        this.contratoNegocidadoEvent.response = result;
        this.contratoNegocidadoEvent.publish();
        return result;

    }

   async NegociarTraspaso(traspaso: INegociarTraspasoCommands): Promise<TraspasoDomainEntity> {
    if(!this.secretariaService)
    throw new AggregateRootException('Servicio secretaria indefinido')

    if(!this.traspasoNegociadoEvent)
    throw new AggregateRootException('Evento creador de secretaria indefinido')

    const result = await this.secretariaService.NegociarTraspaso(traspaso);
    this.traspasoNegociadoEvent.response = result;
    this.traspasoNegociadoEvent.publish();
    return result;
    }

    async CesionModificarState(state: IModificarStateCommands): Promise<CesionDomainEntity> {
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionStateModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.cesionService.CesionModificarState(state);
        this.cesionStateModificadoEvent.response = result;
        this.cesionStateModificadoEvent.publish();
        return result;
    }
    
    async CesionModificarCosto(Costo: IModificarCostoCommands): Promise<CesionDomainEntity> {
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionCostoModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.cesionService.CesionModificarCosto(Costo);
        this.cesionCostoModificadoEvent.response = result;
        this.cesionCostoModificadoEvent.publish();
        return result;
    }

    async CesionModificarFechaSalida(fecha: IModificarFechaCommands): Promise<CesionDomainEntity> {
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionFechaModificadaEvent)
        throw new AggregateRootException('Evento Fecha de cesion indefinido')

        const result = await this.cesionService.CesionModificarFechaSalida(fecha);
        this.cesionFechaModificadaEvent.response = result;
        this.cesionFechaModificadaEvent.publish();
        return result;
    }

    async CesionModificarFechaRetorno(fecha: IModificarFechaCommands):Promise<CesionDomainEntity>{
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionFechaModificadaEvent)
        throw new AggregateRootException('Evento Fecha de cesion indefinido')

        const result = await this.cesionService.CesionModificarFechaRetorno(fecha);
        this.cesionFechaModificadaEvent.response = result;
        this.cesionFechaModificadaEvent.publish();
        return result
    }

    async CesionModificarEquipoNuevo(equipo: IModificarEquipoCommands): Promise<CesionDomainEntity> {
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionEquipoModificadaEvent)
        throw new AggregateRootException('Evento equipo de cesion indefinido')

        const result = await this.cesionService.CesionModificarEquipoNuevo(equipo);
        this.cesionEquipoModificadaEvent.response = result;
        this.cesionEquipoModificadaEvent.publish();
        return result
    }

    async CesionModificarEquipoSalida(equipo: IModificarEquipoCommands): Promise<CesionDomainEntity> {
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionEquipoModificadaEvent)
        throw new AggregateRootException('Evento equipo de cesion indefinido')

        const result = await this.cesionService.CesionModificarEquipoSalida(equipo);
        this.cesionEquipoModificadaEvent.response = result;
        this.cesionEquipoModificadaEvent.publish();
        return result
    }

    async TraspasoModificarState(state: IModificarStateCommands): Promise<TraspasoDomainEntity> {
        if(!this.traspasoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.traspasoStateModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.traspasoService.TraspasoModificarState(state);
        this.traspasoStateModificadoEvent.response = result;
        this.traspasoStateModificadoEvent.publish();
        return result;
    }

    async TraspasoModificarCosto(costo: IModificarCostoCommands): Promise<TraspasoDomainEntity> {
        if(!this.traspasoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.traspasoCostoModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.traspasoService.TraspasoModificarCosto(costo);
        this.traspasoCostoModificadoEvent.response = result;
        this.traspasoCostoModificadoEvent.publish();
        return result;
    }
    
    async TraspasoModificarFechaSalida(fecha: IModificarFechaCommands): Promise<TraspasoDomainEntity> {
        if(!this.traspasoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.traspasoFechaModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.traspasoService.TraspasoModificarFechaSalida(fecha);
        this.traspasoFechaModificadoEvent.response = result;
        this.traspasoFechaModificadoEvent.publish();
        return result;
    }

    async TraspasoModificarEquipoNuevo(equipo: IModificarEquipoCommands): Promise<TraspasoDomainEntity> {
        if(!this.traspasoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.traspasoEquipoModificadaEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.traspasoService.TraspasoModificarEquipoNuevo(equipo);
        this.traspasoEquipoModificadaEvent.response = result;
        this.traspasoEquipoModificadaEvent.publish();
        return result;
    }

    async TraspasoModificarEquipoSalida(equipo: IModificarEquipoCommands): Promise<TraspasoDomainEntity> {
        if(!this.traspasoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.traspasoEquipoModificadaEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.traspasoService.TraspasoModificarEquipoSalida(equipo);
        this.traspasoEquipoModificadaEvent.response = result;
        this.traspasoEquipoModificadaEvent.publish();
        return result;
    }
    async ContratoModificarCosto(Costo: IModificarCostoCommands): Promise<ContratoDomainEntity> {
        if(!this.contratoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.contratoCostoModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.contratoService.ContratoModificarCosto(Costo);
        this.contratoCostoModificadoEvent.response = result;
        this.contratoCostoModificadoEvent.publish();
        return result;
    }
    async ContratoModificarState(state: IModificarStateCommands): Promise<ContratoDomainEntity> {
        if(!this.contratoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.contratoStateModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.contratoService.ContratoModificarState(state);
        this.contratoStateModificadoEvent.response = result;
        this.contratoStateModificadoEvent.publish();
        return result;
    }
    async ContratoModificarFechaSalida(fecha: IModificarFechaCommands): Promise<ContratoDomainEntity> {
        if(!this.contratoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.contratoFechaModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.contratoService.ContratoModificarFechaSalida(fecha);
        this.contratoFechaModificadoEvent.response = result;
        this.contratoFechaModificadoEvent.publish();
        return result;
    }

    


    


    
    
    

    

}

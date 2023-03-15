import { AggregateRootException } from "src/libs";
import { SecretariaDomainEntity } from "../../entities/secretaria/secretaria.domain-entity";
import { CesionNegociadoEventPublisher } from "../../events/publishers/secretaria/cesion-negociado.event-publisher";
import { ContratoNegociadoEventPublisher } from '../../events/publishers/secretaria/contrato-negociado.event-publisher';
import { secretariaCreadaEventPublisher } from '../../events/publishers/secretaria/secretaria-creada.event-publisher';
import { TraspasoNegociadoEventPublisher } from "../../events/publishers/secretaria/traspaso-negociado.event-publisher";
import { ICesionDomainService, ITraspasoDomainService } from "../../services";
import { IContratoDomainService } from '../../services/secretaria/contrato.domain-service';
import { ISecretariaDomainService } from '../../services/secretaria/secretaria.domain-service';
import { CesionDomainEntity } from '../../entities/cesion/cesion.domain-entity';
import { ContratoDomainEntity } from '../../entities/contrato/contrato.domain-entity';
import { TraspasoDomainEntity } from '../../entities/traspaso/traspaso.domain-entity';
import { CostoModificadoEventPublisher } from "../../events/publishers/cesion/costo-modificado.event-publisher";
import { StateModificadoEventPublisher } from '../../events/publishers/cesion/state-modificado.event-publisher';
import { FechaModificadaEventPublisher } from '../../events/publishers/cesion/fecha-modificada.event-publisher';
import { EquipoModificadoEventPublisher } from '../../events/publishers/cesion/equipo-modificado.event-publisher';
import { TraspasoBuscadaEventPublisher } from "../../events/publishers/secretaria/traspaso-buscado.event-publisher";
import { ContratoBuscadaEventPublisher } from '../../events/publishers/secretaria/contrato-buscado.event-publisher';
import { CesionBuscadaEventPublisher } from "../../events/publishers/secretaria/cesion-buscada.event-publisher";
import { BuscarCesionHelper } from "../helpers/buscar-cesion-de-secretaria/buscar-cesion.helper";
import { BuscarTraspasoHelper } from "../helpers/buscar-Traspaso-de-secretaria/buscar-traspaso.helper";
import { BuscarContratoHelper } from "../helpers/buscar-contrato-de-secretaria/buscar-contrato.helper";
import { CrearSecretariaHelper } from '../helpers/crear-secretaria-de-secretaria/crear-secretaria.helper';
import { CrearCesionHelper } from '../helpers/crear-cesion-de-secretaria/crear-cesion.helper';
import { CrearContratoHelper } from "../helpers/crear-contrato-de-secretaria/crear-contrato.helper";
import { CrearTraspasoHelper } from "../helpers/crear-traspaso-de-secretaria/crear-traspaso.helper";

export class SecretariaAggregate implements ISecretariaDomainService ,ICesionDomainService,ITraspasoDomainService,IContratoDomainService{

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
    
    async CrearSecretaria(secretaria: SecretariaDomainEntity): Promise<SecretariaDomainEntity> {
        return CrearSecretariaHelper(secretaria,this.secretariaService,this.secretariaCreadaEvent);
    }

    async BuscarCesion(cesionId: string): Promise<CesionDomainEntity> {
      return BuscarCesionHelper(cesionId,this.cesionService,this.cesionBuscadaEvent);
    }
    async BuscarTraspaso(traspasoId: string): Promise<TraspasoDomainEntity> {
        return BuscarTraspasoHelper(traspasoId,this.traspasoService,this.traspasoBuscadoEvent);

    }
    async BuscarContrato(contratoId: string): Promise<ContratoDomainEntity> {
        return BuscarContratoHelper(contratoId,this.contratoService,this.contratoBuscadoEvent);
    }


    async NegociarCesion(cesion: CesionDomainEntity): Promise<CesionDomainEntity> {
        return CrearCesionHelper(cesion,this.cesionService,this.cesionNegociadaEvent);

    }

    async NegociarContrato(contrato: ContratoDomainEntity): Promise<ContratoDomainEntity> {
        return CrearContratoHelper(contrato,this.contratoService,this.contratoNegocidadoEvent);


    }

   async NegociarTraspaso(traspaso: TraspasoDomainEntity): Promise<TraspasoDomainEntity> {
    return CrearTraspasoHelper(traspaso,this.traspasoService,this.traspasoNegociadoEvent);

    }

//Modificar Cesion

    async CesionModificarState(cesionId: string,entity: CesionDomainEntity): Promise<CesionDomainEntity> {
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionStateModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.cesionService.CesionModificarState(cesionId,entity);
        this.cesionStateModificadoEvent.response = result;
        this.cesionStateModificadoEvent.publish();
        return result;
    }
    
    async CesionModificarCosto(cesionId: string,entity: CesionDomainEntity): Promise<CesionDomainEntity> {
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionCostoModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.cesionService.CesionModificarCosto(cesionId,entity);
        this.cesionCostoModificadoEvent.response = result;
        this.cesionCostoModificadoEvent.publish();
        return result;
    }

    async CesionModificarFechaSalida(cesionId: string,entity: CesionDomainEntity): Promise<CesionDomainEntity> {
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionFechaModificadaEvent)
        throw new AggregateRootException('Evento Fecha de cesion indefinido')

        const result = await this.cesionService.CesionModificarFechaSalida(cesionId,entity);
        this.cesionFechaModificadaEvent.response = result;
        this.cesionFechaModificadaEvent.publish();
        return result;
    }

    async CesionModificarFechaRetorno(cesionId: string,entity: CesionDomainEntity):Promise<CesionDomainEntity>{
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionFechaModificadaEvent)
        throw new AggregateRootException('Evento Fecha de cesion indefinido')

        const result = await this.cesionService.CesionModificarFechaRetorno(cesionId,entity);
        this.cesionFechaModificadaEvent.response = result;
        this.cesionFechaModificadaEvent.publish();
        return result
    }

    async CesionModificarEquipoNuevo(cesionId: string,entity: CesionDomainEntity): Promise<CesionDomainEntity> {
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionEquipoModificadaEvent)
        throw new AggregateRootException('Evento equipo de cesion indefinido')

        const result = await this.cesionService.CesionModificarEquipoNuevo(cesionId,entity);
        this.cesionEquipoModificadaEvent.response = result;
        this.cesionEquipoModificadaEvent.publish();
        return result
    }

    async CesionModificarEquipoSalida(cesionId: string,entity: CesionDomainEntity): Promise<CesionDomainEntity> {
        if(!this.cesionService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.cesionEquipoModificadaEvent)
        throw new AggregateRootException('Evento equipo de cesion indefinido')

        const result = await this.cesionService.CesionModificarEquipoSalida(cesionId,entity);
        this.cesionEquipoModificadaEvent.response = result;
        this.cesionEquipoModificadaEvent.publish();
        return result
    }

//Modificar Traspaso

    async TraspasoModificarState(traspasoId:string,entity: TraspasoDomainEntity): Promise<TraspasoDomainEntity> {
        if(!this.traspasoService)
        throw new AggregateRootException('Servicio Cesion indefinido')
       
        if(!this.traspasoStateModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.traspasoService.TraspasoModificarState( traspasoId,entity);
        this.traspasoStateModificadoEvent.response = result;
        this.traspasoStateModificadoEvent.publish();
        return result;
    }

    async TraspasoModificarCosto(traspasoId:string,entity: TraspasoDomainEntity): Promise<TraspasoDomainEntity> {
        if(!this.traspasoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.traspasoCostoModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.traspasoService.TraspasoModificarCosto( traspasoId,entity);
        this.traspasoCostoModificadoEvent.response = result;
        this.traspasoCostoModificadoEvent.publish();
        return result;
    }
    
    async TraspasoModificarFechaSalida(traspasoId:string,entity: TraspasoDomainEntity): Promise<TraspasoDomainEntity> {
        if(!this.traspasoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.traspasoFechaModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.traspasoService.TraspasoModificarFechaSalida( traspasoId,entity);
        this.traspasoFechaModificadoEvent.response = result;
        this.traspasoFechaModificadoEvent.publish();
        return result;
    }

    async TraspasoModificarEquipoNuevo(traspasoId:string,entity: TraspasoDomainEntity): Promise<TraspasoDomainEntity> {
        if(!this.traspasoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.traspasoEquipoModificadaEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.traspasoService.TraspasoModificarEquipoNuevo( traspasoId,entity);
        this.traspasoEquipoModificadaEvent.response = result;
        this.traspasoEquipoModificadaEvent.publish();
        return result;
    }

    async TraspasoModificarEquipoSalida(traspasoId:string,entity: TraspasoDomainEntity): Promise<TraspasoDomainEntity> {
        if(!this.traspasoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.traspasoEquipoModificadaEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.traspasoService.TraspasoModificarEquipoSalida( traspasoId,entity);
        this.traspasoEquipoModificadaEvent.response = result;
        this.traspasoEquipoModificadaEvent.publish();
        return result;
    }

    //Modificar Contrato

    async ContratoModificarCosto(contratoId:string,entity: ContratoDomainEntity): Promise<ContratoDomainEntity> {
        if(!this.contratoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.contratoCostoModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.contratoService.ContratoModificarCosto(contratoId,entity);
        this.contratoCostoModificadoEvent.response = result;
        this.contratoCostoModificadoEvent.publish();
        return result;
    }

    async ContratoModificarState(contratoId:string,entity: ContratoDomainEntity): Promise<ContratoDomainEntity> {
        if(!this.contratoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.contratoStateModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.contratoService.ContratoModificarState(contratoId,entity);
        this.contratoStateModificadoEvent.response = result;
        this.contratoStateModificadoEvent.publish();
        return result;
    }
    
    async ContratoModificarFechaSalida(contratoId:string,entity: ContratoDomainEntity): Promise<ContratoDomainEntity> {
        if(!this.contratoService)
        throw new AggregateRootException('Servicio Cesion indefinido')

        if(!this.contratoFechaModificadoEvent)
        throw new AggregateRootException('Evento creador de secretaria indefinido')

        const result = await this.contratoService.ContratoModificarFechaSalida(contratoId,entity);
        this.contratoFechaModificadoEvent.response = result;
        this.contratoFechaModificadoEvent.publish();
        return result;
    }

    


    


    
    
    

    

}

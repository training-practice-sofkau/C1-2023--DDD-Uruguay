import { IEmpleadoDomainService } from '../../services/staff-Deportivo/empleado.domain-service';
import { IStaffDeportivoDomainService } from '../../services/staff-Deportivo/staff-deportivo.domain-service';
import { StaffDeportivoDomainEntity } from '../../entities/staff-deportivo/staff-deportivo.entity';
import { ICrearNegociacionCommands, IModificarEquipoNuevoCommands, IModificarEquipoSalidaCommands, IModificarFechaCommands, IModificarStateCommands, IModificarTipoNegociacionCommands} from '../../interfaces';
import { INegociacionDomainService } from '../../services/staff-Deportivo/negociacion.domain-service';
import { ITramiteDomainService } from '../../services/staff-Deportivo/tramite.domain-service';
import { EmpleadoAgregadoEventPublisher } from '../../events/publishers/staff-deporitvo/empleado-agregado.event-publisher';
import { StaffDeportivoCreadoEventPublisher } from '../../events/publishers/staff-deporitvo/staff-depotivo-creado.event-publisher';
import { TramiteAgregadoEventPublisher } from '../../events/publishers/staff-deporitvo/tramite-agregado.event-publisher';
import { AggregateRootException } from '../../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { SalarioEmpleadoModificadoEventPublisher } from '../../events/publishers/staff-deporitvo/salario-empleado-modificado.event-publisher';
import { EmpleadoDomainEntity } from '../../entities/empleado/EmpleadoDomainEntity';
import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';
import { FechaTramiteModificadaEventPublisher } from '../../events/publishers/staff-deporitvo/fecha-tramite-modificada.event-publisher';
import { EmpleadoBuscadoEventPublisher } from '../../events/publishers/staff-deporitvo/empleado-buscado.event-publisher';
import { TramiteBuscadoEventPublisher } from '../../events/publishers/staff-deporitvo/tramite-buscado.event-publisher';
import { DocumentoModificadoEventPublisher, NombreModificadoEventPublisher, SalarioModificadoEventPublisher, TipoDeNegociacionModificadoEventPublisher, TipoEmpleadoModificadoEventPublisher } from '../../events';
import { NegociacionDomainEntity } from '../../entities';
import { EquipoNuevoModificadoEventPublisher } from '../../events/publishers/negociacion/equipo-nuevo-modificado.event-publisher';
import { EquipoSalidaModificadoEventPublisher } from '../../events/publishers/negociacion/equipo-salida-modificado.event-publisher';
import { StateModificadoEventPublisher } from '../../events/publishers/cesion/state-modificado.event-publisher';
import { CrearStaffDeportivoHelper } from '../helpers/crear-staff-deportivo-de-staff-deportivo/crear-staff-deportivo.helper';
import { CrearTramiteHelper } from '../helpers/crear-tramite-de-staff-deportivo/crear-tramite.helper';
import { CrearEmpleadoHelper } from '../helpers/crear-empleado-de-staff-deportivo/crear-empleado.helper';
import { ModificarNombreEmpleadoHelper } from '../helpers/modificar-nombre-empleado-de-staff-deportivo/modificar-nombre-empleado.helper';
import { ModificarDocumentoEmpleadoHelper } from '../helpers/modificar-documento-empleado-de-staff-deportivo/modificar-documento-empleado.helper';
import { ModificarSalarioEmpleadoHelper } from '../helpers/modificar-salario-empleado-de-staff-deportivo/modificar-salario-empleado.helper';
import { ModificarTipoEmpleadoHelper } from '../helpers/modificar-tipo-empleado-de-staff-deportivo/modificar-tipo-empleado.helper';
import { ModificarFechaTramiteHelper } from '../helpers/modificar-fecha-de-staff-deportivo/modificar-fecha-de-tramite.helper';
import { BuscarTramiteHelper } from '../helpers/buscar-tramite-de-staff-deportivo/buscar-tramite.helper';
import { BuscarEmpleadoHelper } from '../helpers/buscar-empleado-de-staff-deportivo/buscar-empleado.helper';

export class StaffDeportivoAggregate implements IStaffDeportivoDomainService{
    //Service
    private readonly staffDeportivoService?: IStaffDeportivoDomainService;

    private readonly empleadoService?: IEmpleadoDomainService;
    private readonly negociacionService?: INegociacionDomainService;
    private readonly tramiteService?: ITramiteDomainService;

    //Events
    //directiva
    private readonly staffDeportivoCreadoEvent?: StaffDeportivoCreadoEventPublisher;
    

    //empleado
    private readonly empleadoAgregadoEvent?: EmpleadoAgregadoEventPublisher;
    private readonly salarioEmpleadoModificadoEvent?: SalarioEmpleadoModificadoEventPublisher;
    private readonly empleadoBuscadoEvent?: EmpleadoBuscadoEventPublisher;
    private readonly nombremodificadoEvent?: NombreModificadoEventPublisher;
    private readonly documentoModificadoEvent?: DocumentoModificadoEventPublisher;
    private readonly tipoEmpleadoModificadoEvent?: TipoEmpleadoModificadoEventPublisher;
    private readonly salarioModificadoEvent?: SalarioModificadoEventPublisher;
   

    //tramite
    private readonly tamiteAgregadoEvent?: TramiteAgregadoEventPublisher;
    private readonly fechaTamiteModificadoEvent?: FechaTramiteModificadaEventPublisher;
    private readonly tamiteBuscadoEvent?: TramiteBuscadoEventPublisher;

    //negociacion
    private readonly negociacionEquipoNuevoModificadoEvent?: EquipoNuevoModificadoEventPublisher;
    private readonly negociacionEquipoSalidaModificadoEvent?: EquipoSalidaModificadoEventPublisher;
    private readonly negociacionStateModificadoEvent?: StateModificadoEventPublisher;
    private readonly negociacionTipoNegociacionModificadoEvent?: TipoDeNegociacionModificadoEventPublisher;



    constructor(
        {
            //services
            staffDeportivoService,

            empleadoService,
            negociacionService,
            tramiteService,
            //events
            staffDeportivoCreadoEvent,
           // staffDeportivoModificadaEvent,

           //empleado
            empleadoAgregadoEvent,
            salarioEmpleadoModificadoEvent,
            empleadoBuscadoEvent,
            nombreModificadoEvent,
            documentoModificadoEvent,
            tipoEmpleadoModificadoEvent,
            //tramite
            tamiteBuscadoEvent,
            tamiteAgregadoEvent,
            fechaTamiteModificadoEvent,
            
            //negociacion
            negociacionEquipoNuevoModificadoEvent,
            negociacionEquipoSalidaModificadoEvent,
            negociacionStateModificadoEvent,
            negociacionTipoNegociacionModificadoEvent,

        }: {
            //services
            staffDeportivoService?: IStaffDeportivoDomainService;
            empleadoService?: IEmpleadoDomainService;
            negociacionService?: INegociacionDomainService;
            tramiteService?: ITramiteDomainService;
            //events
            staffDeportivoCreadoEvent?: StaffDeportivoCreadoEventPublisher;
           // directivaModificadaEvent?: StaffDeportivoModificadoEventPublisher,
           empleadoAgregadoEvent?: EmpleadoAgregadoEventPublisher;
           salarioEmpleadoModificadoEvent?: SalarioEmpleadoModificadoEventPublisher;
           empleadoBuscadoEvent?: EmpleadoBuscadoEventPublisher;
           nombreModificadoEvent?: NombreModificadoEventPublisher;
           documentoModificadoEvent?: DocumentoModificadoEventPublisher;
           tipoEmpleadoModificadoEvent?: TipoEmpleadoModificadoEventPublisher;

           //tramite
            tamiteAgregadoEvent?: TramiteAgregadoEventPublisher;
            fechaTamiteModificadoEvent?: FechaTramiteModificadaEventPublisher;
            tamiteBuscadoEvent?: TramiteBuscadoEventPublisher;

            //negociacion
            negociacionEquipoNuevoModificadoEvent?: EquipoNuevoModificadoEventPublisher;
            negociacionEquipoSalidaModificadoEvent?: EquipoSalidaModificadoEventPublisher;
            negociacionStateModificadoEvent?: StateModificadoEventPublisher;
            negociacionTipoNegociacionModificadoEvent?: TipoDeNegociacionModificadoEventPublisher;
        }
    ) {
        //services
        this.staffDeportivoService = staffDeportivoService;

        this.empleadoService = empleadoService;
        //this.negociacionService = negociacionService,
        this.tramiteService = tramiteService;
        //events
       // this.directivaCreadaEvent = directivaCreadaEvent,
       this.staffDeportivoCreadoEvent = staffDeportivoCreadoEvent;
        //empleado
        this.empleadoAgregadoEvent = empleadoAgregadoEvent;
        this.salarioEmpleadoModificadoEvent = salarioEmpleadoModificadoEvent;
        this.empleadoBuscadoEvent = empleadoBuscadoEvent;
        this.nombremodificadoEvent = nombreModificadoEvent;
        this.documentoModificadoEvent = documentoModificadoEvent;
        this.tipoEmpleadoModificadoEvent = tipoEmpleadoModificadoEvent;
        //tramite
        this.tamiteAgregadoEvent = tamiteAgregadoEvent;
        this.fechaTamiteModificadoEvent = fechaTamiteModificadoEvent;
        this.empleadoBuscadoEvent = empleadoBuscadoEvent;

        //negociacion
        this.negociacionEquipoNuevoModificadoEvent = negociacionEquipoNuevoModificadoEvent;
        this.negociacionEquipoSalidaModificadoEvent = negociacionEquipoSalidaModificadoEvent;
        this.negociacionStateModificadoEvent = negociacionStateModificadoEvent;
        this.negociacionTipoNegociacionModificadoEvent = negociacionTipoNegociacionModificadoEvent;
    }


  
    
     CrearStaffDeportivo(staffDeportivo: StaffDeportivoDomainEntity): Promise<StaffDeportivoDomainEntity> {
       return CrearStaffDeportivoHelper(staffDeportivo,this.staffDeportivoService,this.staffDeportivoCreadoEvent);
    }

     CrearTramite(tramite: TramiteDomainEntity): Promise<TramiteDomainEntity> {
       return CrearTramiteHelper(tramite,this.staffDeportivoService,this.tamiteAgregadoEvent)
    }


     AgregarEmpleado(empleado: EmpleadoDomainEntity): Promise<EmpleadoDomainEntity> {
        return CrearEmpleadoHelper(empleado,this.staffDeportivoService,this.empleadoAgregadoEvent)
    }

     modificarNombre(nombre: EmpleadoDomainEntity): Promise<EmpleadoDomainEntity> {
        return ModificarNombreEmpleadoHelper(nombre,this.staffDeportivoService,this.nombremodificadoEvent)

    }


     modificarSalario(salario: EmpleadoDomainEntity): Promise<EmpleadoDomainEntity> {
        return ModificarSalarioEmpleadoHelper(salario,this.staffDeportivoService,this.salarioModificadoEvent)

    }
     modificarDocumento(documento: EmpleadoDomainEntity): Promise<EmpleadoDomainEntity> {

        return ModificarDocumentoEmpleadoHelper(documento,this.staffDeportivoService,this.documentoModificadoEvent)

    }
     modificarTipoEmpleado(tipo: EmpleadoDomainEntity): Promise<EmpleadoDomainEntity> {
        return ModificarTipoEmpleadoHelper(tipo,this.staffDeportivoService,this.tipoEmpleadoModificadoEvent)

    }

    CrearNegociacion(negociacion: TramiteDomainEntity): Promise<TramiteDomainEntity> {
        throw new Error('Method not implemented.');
    }

     ModificarFecha(fecha: TramiteDomainEntity): Promise<TramiteDomainEntity> {
        return ModificarFechaTramiteHelper(fecha,this.tramiteService,this.fechaTamiteModificadoEvent)

    }

    
     BuscarTramite(Tramite: TramiteDomainEntity):Promise<TramiteDomainEntity>{
        return BuscarTramiteHelper(Tramite,this.staffDeportivoService,this.tamiteBuscadoEvent)

    }

     BuscarEmpleado(empleado: EmpleadoDomainEntity):Promise<EmpleadoDomainEntity>{
        return BuscarEmpleadoHelper(empleado,this.staffDeportivoService,this.empleadoBuscadoEvent)

    }

     NegociacionModificarEquipoNuevo(equipoNuevoId: NegociacionDomainEntity): Promise<NegociacionDomainEntity> {
        return ModificarEquipoNuevoDeNegociacionHelper(equipoNuevoId,this.negociacionService,this.negociacionEquipoNuevoModificadoEvent)
        
    }
    
     NegociacionModificarEquipoSalida(equipoSalidaId: NegociacionDomainEntity): Promise<NegociacionDomainEntity> {
        return ModificarEquipoSalidaDeNegociacionHelper(equipoSalidaId,this.negociacionService,this.negociacionEquipoSalidaModificadoEvent)

    }
     NegociacionModificarState(state: NegociacionDomainEntity): Promise<NegociacionDomainEntity> {
        return ModificarStateDeNegociacionHelper(state,this.negociacionService,this.negociacionStateModificadoEvent)
        
    }
     NegociacionModificarTipoNegociacion(tipo: NegociacionDomainEntity): Promise<NegociacionDomainEntity> {
        return ModificarTipoNegociacionHelper(tipo,this.negociacionService,this.negociacionTipoNegociacionModificadoEvent)

    }


   
   

   

   

 
    
 
    
}
function ModificarEquipoNuevoDeNegociacionHelper(equipoNuevoId: NegociacionDomainEntity, negociacionService: INegociacionDomainService<NegociacionDomainEntity>, negociacionEquipoNuevoModificadoEvent: EquipoNuevoModificadoEventPublisher<NegociacionDomainEntity>): Promise<NegociacionDomainEntity> {
    throw new Error('Function not implemented.');
}

function ModificarEquipoSalidaDeNegociacionHelper(equipoSalidaId: NegociacionDomainEntity, negociacionService: INegociacionDomainService<NegociacionDomainEntity>, negociacionEquipoSalidaModificadoEvent: EquipoSalidaModificadoEventPublisher<NegociacionDomainEntity>): Promise<NegociacionDomainEntity> {
    throw new Error('Function not implemented.');
}

function ModificarStateDeNegociacionHelper(state: NegociacionDomainEntity, negociacionService: INegociacionDomainService<NegociacionDomainEntity>, negociacionStateModificadoEvent: StateModificadoEventPublisher<import("../../entities").CesionDomainEntity>): Promise<NegociacionDomainEntity> {
    throw new Error('Function not implemented.');
}

function ModificarTipoNegociacionHelper(tipo: NegociacionDomainEntity, negociacionService: INegociacionDomainService<NegociacionDomainEntity>, negociacionTipoNegociacionModificadoEvent: TipoDeNegociacionModificadoEventPublisher<NegociacionDomainEntity>): Promise<NegociacionDomainEntity> {
    throw new Error('Function not implemented.');
}


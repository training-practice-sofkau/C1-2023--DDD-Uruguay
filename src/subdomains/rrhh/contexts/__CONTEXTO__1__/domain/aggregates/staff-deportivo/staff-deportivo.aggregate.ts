import { IEmpleadoDomainService } from '../../services/staff-Deportivo/empleado.domain-service';
import { IStaffDeportivoDomainService } from '../../services/staff-Deportivo/staff-deportivo.domain-service';
import { StaffDeportivoDomainEntity } from '../../entities/staff-deportivo/staff-deportivo.entity';
import { ICrearNegociacionCommands, IModificarDocumentoCommands, IModificarFechaCommands, IModificarNombreCommands, IModificarSalarioCommands, IModificarTipoEmpleadoCommands } from '../../interfaces';
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
import { DocumentoModificadoEventPublisher, NombreModificadoEventPublisher, SalarioModificadoEventPublisher, TipoEmpleadoModificadoEventPublisher } from '../../events';

export class StaffDeportivoAggregate implements IStaffDeportivoDomainService{
    //Service
    private readonly staffDeportivoService?: IStaffDeportivoDomainService;

    private readonly empleadoService?: IEmpleadoDomainService;
    //private readonly negociacionService?: INegociacionDomainService;
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
            //tramite
            tamiteBuscadoEvent,
            tamiteAgregadoEvent,
            fechaTamiteModificadoEvent,

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

           //tramite
            tamiteAgregadoEvent?: TramiteAgregadoEventPublisher;
            fechaTamiteModificadoEvent?: FechaTramiteModificadaEventPublisher;
            tamiteBuscadoEvent?: TramiteBuscadoEventPublisher;
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
        //tramite
        this.tamiteAgregadoEvent = tamiteAgregadoEvent;
        this.fechaTamiteModificadoEvent = fechaTamiteModificadoEvent;
        this.empleadoBuscadoEvent = empleadoBuscadoEvent;

    }

    async CrearStaffDeportivo(staffDeportivo: StaffDeportivoDomainEntity): Promise<StaffDeportivoDomainEntity> {
        if(!this.staffDeportivoService)
        throw new AggregateRootException('Servicio Staff Deportivo indefinido')

        if(!this.staffDeportivoCreadoEvent)
        throw new AggregateRootException('Evento creador de Staff Deportivo indefinido')

        const result = await this.staffDeportivoService.CrearStaffDeportivo(staffDeportivo);
        this.staffDeportivoCreadoEvent.response = result;
        this.staffDeportivoCreadoEvent.publish();
        return result;
    }

    async CrearTramite(tramite: TramiteDomainEntity): Promise<TramiteDomainEntity> {
       if(!this.staffDeportivoService)
        throw new AggregateRootException('Servicio Staff Deportivo indefinido')

        if(!this.tamiteAgregadoEvent) throw new AggregateRootException('Evento creador de Staff Deportivo indefinido');

        const result = await this.staffDeportivoService.CrearTramite(tramite);
        this.tamiteAgregadoEvent.response = result;
        this.tamiteAgregadoEvent.publish();
        return result;
    }

    async AgregarEmpleado(empleado: EmpleadoDomainEntity): Promise<EmpleadoDomainEntity> {
       if(!this.staffDeportivoService)
        throw new AggregateRootException('Servicio Staff Deportivo indefinido')

        if(!this.empleadoAgregadoEvent) throw new AggregateRootException('Evento Agregar Empleado indefinido');

        const result = await this.staffDeportivoService.AgregarEmpleado(empleado);
        this.empleadoAgregadoEvent.response = result;
        this.empleadoAgregadoEvent.publish();
        return result;
    }

  


    async modificarNombre(nombre: EmpleadoDomainEntity): Promise<EmpleadoDomainEntity> {
        if(!this.empleadoService)
        throw new AggregateRootException('Servicio de Empleado indefinido')

        if(!this.nombremodificadoEvent)
        throw new AggregateRootException('Evento que modifica el documento de un empleado indefinido')

        const result = await this.empleadoService.modificarNombre(nombre);
        this.nombremodificadoEvent.response = result;
        this.nombremodificadoEvent.publish();
        return result;
    }

    //Salario del empleado
    async modificarSalario(salario: EmpleadoDomainEntity): Promise<EmpleadoDomainEntity> {
        if(!this.empleadoService)
        throw new AggregateRootException('Servicio de Empleado indefinido')

        if(!this.salarioEmpleadoModificadoEvent)
        throw new AggregateRootException('Evento que modifica el salario de un empleado indefinido')

        const result = await this.empleadoService.modificarSalario(salario);
        this.salarioEmpleadoModificadoEvent.response = result;
        this.salarioEmpleadoModificadoEvent.publish();
        return result;
    }
    async modificarDocumento(documento: EmpleadoDomainEntity): Promise<EmpleadoDomainEntity> {
        if(!this.empleadoService)
        throw new AggregateRootException('Servicio de Empleado indefinido')

        if(!this.documentoModificadoEvent)
        throw new AggregateRootException('Evento que modifica el documento de un empleado indefinido')

        const result = await this.empleadoService.modificarSalario(documento);
        this.documentoModificadoEvent.response = result;
        this.documentoModificadoEvent.publish();
        return result;
    }
    async modificarTipoEmpleado(tipo: EmpleadoDomainEntity): Promise<EmpleadoDomainEntity> {
        if(!this.empleadoService)
        throw new AggregateRootException('Servicio de Empleado indefinido')

        if(!this.tipoEmpleadoModificadoEvent)
        throw new AggregateRootException('Evento que modifica el documento de un empleado indefinido')

        const result = await this.empleadoService.modificarSalario(tipo);
        this.tipoEmpleadoModificadoEvent.response = result;
        this.tipoEmpleadoModificadoEvent.publish();
        return result;
    }

    CrearNegociacion(negociacion: ICrearNegociacionCommands): Promise<TramiteDomainEntity> {
        throw new Error('Method not implemented.');
    }

    async ModificarFecha(fecha: IModificarFechaCommands): Promise<TramiteDomainEntity> {
        if(!this.tramiteService)
        throw new AggregateRootException('Servicio de Empleado indefinido')

        if(!this.fechaTamiteModificadoEvent)
        throw new AggregateRootException('Evento que modifica el salario de un empleado indefinido')

        const result = await this.tramiteService.ModificarFecha(fecha);
        this.fechaTamiteModificadoEvent.response = result;
        this.fechaTamiteModificadoEvent.publish();
        return result;
    }

    
    async BuscarTramite(Tramite: TramiteDomainEntity):Promise<TramiteDomainEntity>{
        if(!this.staffDeportivoService)
        throw new AggregateRootException('Servicio de Empleado indefinido')

        if(!this.tamiteBuscadoEvent)
        throw new AggregateRootException('Evento que modifica el salario de un empleado indefinido')

        const result = await this.staffDeportivoService.BuscarTramite(Tramite);
        this.tamiteBuscadoEvent.response = result;
        this.tamiteBuscadoEvent.publish();
        return result;
    }

   async  BuscarEmpleado(empleado: EmpleadoDomainEntity):Promise<EmpleadoDomainEntity>{
        if(!this.staffDeportivoService)
        throw new AggregateRootException('Servicio de Empleado indefinido')

        if(!this.empleadoBuscadoEvent)
        throw new AggregateRootException('Evento que modifica el salario de un empleado indefinido')

        const result = await this.staffDeportivoService.BuscarEmpleado(empleado);
        this.empleadoBuscadoEvent.response = result;
        this.empleadoBuscadoEvent.publish();
        return result;
    }

   
   

   

   

 
    
 
    
}

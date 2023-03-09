import { IEmpleadoDomainService } from '../../services/staff-Deportivo/empleado.domain-service';
import { IStaffDeportivoDomainService } from '../../services/staff-Deportivo/staff-deportivo.domain-service';
import { StaffDeportivoDomainEntity } from '../../entities/staff-deportivo/staff-deportivo.entity';
import { IAgregarEmpleadoCommands, ICrearNegociacionCommands, IModificarDocumentoCommands, IModificarFechaCommands, IModificarFechaTramiteCommands, IModificarNombreCommands, IModificarSalarioCommands, IModificarSalarioEmpleadoCommands, IModificarTipoEmpleadoCommands } from '../../interfaces';
import { ICrearStaffDeportivoCommands } from '../../interfaces/commands/staff-deportivo/crear-staff-deportivo.commands';
import { ICrearTramiteCommands } from '../../interfaces/commands/staff-deportivo/crear-tramite.commands';
import { INegociacionDomainService } from '../../services/staff-Deportivo/negociacion.domain-service';
import { ITramiteDomainService } from '../../services/staff-Deportivo/tramite.domain-service';
import { EmpleadoAgregadoEventPublisher } from '../../events/publishers/staff-deporitvo/empleado-agregado.event-publisher';
import { StaffDeportivoCreadoEventPublisher } from '../../events/publishers/staff-deporitvo/staff-depotivo-creado.event-publisher';
import { EmpleadoRemovidoEventPublisher } from '../../events/publishers/staff-deporitvo/empleado-removido.event-publisher';
import { TramiteAgregadoEventPublisher } from '../../events/publishers/staff-deporitvo/tramite-agregado.event-publisher';
import { AggregateRootException } from '../../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { SalarioEmpleadoModificadoEventPublisher } from '../../events/publishers/staff-deporitvo/salario-empleado-modificado.event-publisher';
import { EmpleadoDomainEntity } from '../../entities/empleado/EmpleadoDomainEntity';
import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';
import { FechaTramiteModificadaEventPublisher } from '../../events/publishers/staff-deporitvo/fecha-tramite-modificada.event-publisher';

export class StaffDeportivoAggregate implements IStaffDeportivoDomainService, IEmpleadoDomainService,ITramiteDomainService{
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
   

    //tramite
    private readonly tamiteAgregadoEvent?: TramiteAgregadoEventPublisher;
    private readonly fechaTamiteModificadoEvent?: FechaTramiteModificadaEventPublisher;


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
            empleadoAgregadoEvent,
            salarioEmpleadoModificadoEvent,
            empleadoRemovidoEvent,
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
            empleadoRemovidoEvent?: EmpleadoRemovidoEventPublisher;
            tamiteAgregadoEvent?: TramiteAgregadoEventPublisher;
            fechaTamiteModificadoEvent?: FechaTramiteModificadaEventPublisher;
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
        this.empleadoAgregadoEvent = empleadoAgregadoEvent;
        this.salarioEmpleadoModificadoEvent = salarioEmpleadoModificadoEvent;
        this.tamiteAgregadoEvent = tamiteAgregadoEvent;
        this.fechaTamiteModificadoEvent = fechaTamiteModificadoEvent;

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

        if(!this.tamiteAgregadoEvent)
        throw new AggregateRootException('Evento creador de Staff Deportivo indefinido')

        const result = await this.staffDeportivoService.CrearTramite(tramite);
        this.tamiteAgregadoEvent.response = result;
        this.tamiteAgregadoEvent.publish();
        return result;
    }

    async AgregarEmpleado(empleado: EmpleadoDomainEntity): Promise<EmpleadoDomainEntity> {
       if(!this.staffDeportivoService)
        throw new AggregateRootException('Servicio Staff Deportivo indefinido')

        if(!this.empleadoAgregadoEvent)
        throw new AggregateRootException('Evento creador Empleado indefinido')

        const result = await this.staffDeportivoService.AgregarEmpleado(empleado);
        this.empleadoAgregadoEvent.response = result;
        this.empleadoAgregadoEvent.publish();
        return result;
    }

  


    modificarNombre(nombre: IModificarNombreCommands): Promise<EmpleadoDomainEntity> {
        throw new Error('Method not implemented.');
    }

    //Salario del empleado
    async modificarSalario(salario: IModificarSalarioCommands): Promise<EmpleadoDomainEntity> {
        if(!this.empleadoService)
        throw new AggregateRootException('Servicio de Empleado indefinido')

        if(!this.salarioEmpleadoModificadoEvent)
        throw new AggregateRootException('Evento que modifica el salario de un empleado indefinido')

        const result = await this.empleadoService.modificarSalario(salario);
        this.salarioEmpleadoModificadoEvent.response = result;
        this.salarioEmpleadoModificadoEvent.publish();
        return result;
    }
    modificarDocumento(documento: IModificarDocumentoCommands): Promise<EmpleadoDomainEntity> {
        throw new Error('Method not implemented.');
    }
    modificarTipoEmpleado(tipo: IModificarTipoEmpleadoCommands): Promise<EmpleadoDomainEntity> {
        throw new Error('Method not implemented.');
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

   
   

   

   

 
    
 
    
}

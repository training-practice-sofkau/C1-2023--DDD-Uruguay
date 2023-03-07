import { IEmpleadoDomainService } from '../../services/staff-Deportivo/empleado.domain-service';
import { IStaffDeportivoDomainService } from '../../services/staff-Deportivo/staff-deportivo.domain-service';
import { StaffDeportivoDomainEntity } from '../../entities/staff-deportivo/staff-deportivo.entity';
import { IAgregarEmpleadoCommands, IModificarFechaTramiteCommands, IModificarSalarioEmpleadoCommands } from '../../interfaces';
import { ICrearStaffDeportivoCommands } from '../../interfaces/commands/staff-deportivo/crear-staff-deportivo.commands';
import { ICrearTramiteCommands } from '../../interfaces/commands/staff-deportivo/crear-tramite.commands';
import { INegociacionDomainService } from '../../services/staff-Deportivo/negociacion.domain-service';
import { ITramiteDomainService } from '../../services/staff-Deportivo/tramite.domain-service';
import { EmpleadoAgregadoEventPublisher } from '../../events/publishers/staff-deporitvo/empleado-agregado.event-publisher';
import { DirectivaCreadaEventPublisher } from '../../events/publishers/staff-deporitvo/directiva-creada.event-publisher';
import { DirectivaModificadoEventPublisher } from '../../events/publishers/staff-deporitvo/directiva-modificado.event-publisher';
import { EmpleadoRemovidoEventPublisher } from '../../events/publishers/staff-deporitvo/empleado-removido.event-publisher';
import { TramiteAgregadoEventPublisher } from '../../events/publishers/staff-deporitvo/tramite-agregado.event-publisher';
import { AggregateRootException } from '../../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { SalarioEmpleadoModificadoEventPublisher } from '../../events/publishers/staff-deporitvo/salario-empleado-modificado.event-publisher';
import { EmpleadoDomainEntity } from '../../entities/empleado/EmpleadoDomainEntity';
import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';
import { FechaTramiteModificadaEventPublisher } from '../../events/publishers/staff-deporitvo/fecha-tramite-modificada.event-publisher';

export class StaffDeportivoAggregate implements IStaffDeportivoDomainService{
    //Service
    private readonly staffDeportivoService?: IStaffDeportivoDomainService;

    private readonly empleadoService?: IEmpleadoDomainService;
    //private readonly negociacionService?: INegociacionDomainService;
    private readonly tamiteService?: ITramiteDomainService;

    //Events
    //directiva
    private readonly directivaCreadaEvent?: DirectivaCreadaEventPublisher;
    

    //empleado
    private readonly empleadoCreadoEvent?: EmpleadoAgregadoEventPublisher;
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
            tamiteService,
            //events
            directivaCreadaEvent,
            directivaModificadaEvent,
            empleadoCreadoEvent,
            salarioEmpleadoModificadoEvent,
            empleadoRemovidoEvent,
            tamiteAgregadoEvent,
            fechaTamiteModificadoEvent,

        }: {
            //services
            staffDeportivoService?: IStaffDeportivoDomainService,
            empleadoService?: IEmpleadoDomainService,
            negociacionService?: INegociacionDomainService,
            tamiteService?: ITramiteDomainService,
            //events
            directivaCreadaEvent?: DirectivaCreadaEventPublisher,
            directivaModificadaEvent?: DirectivaModificadoEventPublisher,
            empleadoCreadoEvent?: EmpleadoAgregadoEventPublisher,
            salarioEmpleadoModificadoEvent?: SalarioEmpleadoModificadoEventPublisher,
            empleadoRemovidoEvent?: EmpleadoRemovidoEventPublisher,
            tamiteAgregadoEvent?: TramiteAgregadoEventPublisher,
            fechaTamiteModificadoEvent?: FechaTramiteModificadaEventPublisher,
        }
    ) {
        //services
        this.staffDeportivoService = staffDeportivoService,

        this.empleadoService = empleadoService,
        //this.negociacionService = negociacionService,
        this.tamiteService = tamiteService,
        //events
        this.directivaCreadaEvent = directivaCreadaEvent,
        this.empleadoCreadoEvent = empleadoCreadoEvent,
        this.salarioEmpleadoModificadoEvent = salarioEmpleadoModificadoEvent,
        this.tamiteAgregadoEvent = tamiteAgregadoEvent,
        this.fechaTamiteModificadoEvent = fechaTamiteModificadoEvent

    }

    async CrearStaffDeportivo(staffDeportivo: ICrearStaffDeportivoCommands): Promise<StaffDeportivoDomainEntity> {
        if(!this.staffDeportivoService)
        throw new AggregateRootException('Servicio Staff Deportivo indefinido')

        if(!this.directivaCreadaEvent)
        throw new AggregateRootException('Evento creador de Staff Deportivo indefinido')

        const result = await this.staffDeportivoService.CrearStaffDeportivo(staffDeportivo);
        this.directivaCreadaEvent.response = result;
        this.directivaCreadaEvent.publish();
        return result;
    }

    async CrearTramite(tramite: ICrearTramiteCommands): Promise<TramiteDomainEntity> {
       if(!this.staffDeportivoService)
        throw new AggregateRootException('Servicio Staff Deportivo indefinido')

        if(!this.tamiteAgregadoEvent)
        throw new AggregateRootException('Evento creador de Staff Deportivo indefinido')

        const result = await this.staffDeportivoService.CrearTramite(tramite);
        this.tamiteAgregadoEvent.response = result;
        this.tamiteAgregadoEvent.publish();
        return result;
    }

    async AgregarEmpleado(empleado: IAgregarEmpleadoCommands): Promise<EmpleadoDomainEntity> {
       if(!this.staffDeportivoService)
        throw new AggregateRootException('Servicio Staff Deportivo indefinido')

        if(!this.empleadoCreadoEvent)
        throw new AggregateRootException('Evento creador Empleado indefinido')

        const result = await this.staffDeportivoService.AgregarEmpleado(empleado);
        this.empleadoCreadoEvent.response = result;
        this.empleadoCreadoEvent.publish();
        return result;
    }

    
    async ModificarSalarioEmpleado(salario: IModificarSalarioEmpleadoCommands): Promise<EmpleadoDomainEntity> {
       if(!this.empleadoService)
        throw new AggregateRootException('Servicio de Empleado indefinido')

        if(!this.salarioEmpleadoModificadoEvent)
        throw new AggregateRootException('Evento que modifica el salario de un empleado indefinido')

        const result = await this.empleadoService.modificarSalario(salario);
        this.salarioEmpleadoModificadoEvent.response = result;
        this.salarioEmpleadoModificadoEvent.publish();
        return result;
    }

    async ModificarFechaTramite(tramite: IModificarFechaTramiteCommands): Promise<TramiteDomainEntity> {
        if(!this.tamiteService)
        throw new AggregateRootException('Servicio de Empleado indefinido')

        if(!this.fechaTamiteModificadoEvent)
        throw new AggregateRootException('Evento que modifica el salario de un empleado indefinido')

        const result = await this.tamiteService.ModificarFecha(tramite);
        this.fechaTamiteModificadoEvent.response = result;
        this.fechaTamiteModificadoEvent.publish();
        return result;
    }

   

 
    
 
    
}

import { IEmpleadoDomainService } from '../../services/staff-Deportivo/empleado.domain-service';
import { IStaffDeportivoDomainService } from '../../services/staff-Deportivo/staff-deportivo.domain-service';
import { StaffDeportivoDomainEntity } from '../../entities/staff-deportivo/staff-deportivo.entity';
import { IAgregarEmpleadoCommands, IRemoverEmpleadoCommands, IModificarEmpleadoCommands, IModificarTramiteCommands } from '../../interfaces';
import { ICrearStaffDeportivoCommands } from '../../interfaces/commands/staff-deportivo/crear-staff-deportivo.commands';
import { ICrearTramiteCommands } from '../../interfaces/commands/staff-deportivo/crear-tramite.commands';
import { INegociacionDomainService } from '../../services/staff-Deportivo/negociacion.domain-service';
import { ITramiteDomainService } from '../../services/staff-Deportivo/tramite.domain-service';
import { EmpleadoAgregadoEventPublisher } from '../../events/publishers/staff-deporitvo/empleado-agregado.event-publisher';
import { DirectivaCreadaEventPublisher } from '../../events/publishers/staff-deporitvo/directiva-creada.event-publisher';
import { DirectivaModificadoEventPublisher } from '../../events/publishers/staff-deporitvo/directiva-modificado.event-publisher';
import { EmpleadoModificadoEventPublisher } from '../../events/publishers/staff-deporitvo/empleado-modificado.event-publisher';
import { EmpleadoRemovidoEventPublisher } from '../../events/publishers/staff-deporitvo/empleado-removido.event-publisher';
import { TramiteAgregadoEventPublisher } from '../../events/publishers/staff-deporitvo/tramite-agregado.event-publisher';
import { TramiteModificadoEventPublisher } from '../../events/publishers/staff-deporitvo/tramite-modificado.event-publisher';

export class StaffDeportivoAggregate implements IStaffDeportivoDomainService{
    //Service
    private readonly empleadoService?: IEmpleadoDomainService;
    private readonly negociacionService?: INegociacionDomainService;
    private readonly tamiteService?: ITramiteDomainService;
    //Events
    private readonly directivaCreadaEvent?: DirectivaCreadaEventPublisher;
    private readonly directivaModificadaEvent?: DirectivaModificadoEventPublisher;
    private readonly empleadoCreadoEvent?: EmpleadoAgregadoEventPublisher;
    private readonly empleadoModificadoEvent?: EmpleadoModificadoEventPublisher;
    private readonly empleadoRemovidoEvent?: EmpleadoRemovidoEventPublisher;
    private readonly tamiteAgregadoEvent?: TramiteAgregadoEventPublisher;
    private readonly tamiteModificadoEvent?: TramiteModificadoEventPublisher;


    constructor(
        {
            //services
            empleadoService,
            negociacionService,
            tamiteService,
            //events
            directivaCreadaEvent,
            directivaModificadaEvent,
            empleadoCreadoEvent,
            empleadoModificadoEvent,
            empleadoRemovidoEvent,
            tamiteAgregadoEvent,
            tamiteModificadoEvent,

        }: {
            //services
            empleadoService?: IEmpleadoDomainService,
            negociacionService?: INegociacionDomainService,
            tamiteService?: ITramiteDomainService,
            //events
            directivaCreadaEvent?: DirectivaCreadaEventPublisher,
            directivaModificadaEvent?: DirectivaModificadoEventPublisher,
            empleadoCreadoEvent?: EmpleadoAgregadoEventPublisher,
            empleadoModificadoEvent?: EmpleadoModificadoEventPublisher,
            empleadoRemovidoEvent?: EmpleadoRemovidoEventPublisher,
            tamiteAgregadoEvent?: TramiteAgregadoEventPublisher,
            tamiteModificadoEvent?: TramiteModificadoEventPublisher,
        }
    ) {
        //services
        this.empleadoService = empleadoService,
        this.negociacionService = negociacionService,
        this.tamiteService = tamiteService,
        //events
        this.directivaCreadaEvent = directivaCreadaEvent,
        this.directivaModificadaEvent = directivaModificadaEvent,
        this.empleadoCreadoEvent = empleadoCreadoEvent,
        this.empleadoModificadoEvent = empleadoModificadoEvent,
        this.empleadoRemovidoEvent = empleadoRemovidoEvent,
        this.tamiteAgregadoEvent = tamiteAgregadoEvent,
        this.tamiteModificadoEvent = tamiteModificadoEvent

    }

    async CrearStaffDeportivo(staffDeportivo: ICrearStaffDeportivoCommands): Promise<StaffDeportivoDomainEntity> {
        throw new Error('Method not implemented.');
    }
    async CrearTramite(tramite: ICrearTramiteCommands): Promise<StaffDeportivoDomainEntity> {
        throw new Error('Method not implemented.');
    }
    async AgregarEmpleado(empleado: IAgregarEmpleadoCommands): Promise<StaffDeportivoDomainEntity> {
        throw new Error('Method not implemented.');
    }
    async RemoverEmpleado(empleadoId: IRemoverEmpleadoCommands): Promise<StaffDeportivoDomainEntity> {
        throw new Error('Method not implemented.');
    }
    async ModificarEmpleado(empleado: IModificarEmpleadoCommands): Promise<StaffDeportivoDomainEntity> {
        throw new Error('Method not implemented.');
    }
    async ModificarTramite(tramite: IModificarTramiteCommands): Promise<StaffDeportivoDomainEntity> {
        throw new Error('Method not implemented.');
    }
    
    
 
    
}

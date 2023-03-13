import { EmpleadoDomainEntity } from '../../entities/empleado/EmpleadoDomainEntity';

export interface IEmpleadoDomainService<T extends EmpleadoDomainEntity = EmpleadoDomainEntity> {

    modificarNombre(empleadoId:string ,entity: T):Promise<T>;
    modificarSalario(empleadoId:string ,entity: T):Promise<T>;
    modificarDocumento(empleadoId:string ,entity: T):Promise<T>;
    modificarTipoEmpleado(empleadoId:string ,entity: T):Promise<T>;

    AgregarEmpleado(empleado:T):Promise<T>;

    BuscarEmpleado(empleado: string):Promise<T>;
    
    
}

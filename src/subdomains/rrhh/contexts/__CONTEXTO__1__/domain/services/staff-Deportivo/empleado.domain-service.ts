import { EmpleadoDomainEntity } from '../../entities/empleado/EmpleadoDomainEntity';

export interface IEmpleadoDomainService<T extends EmpleadoDomainEntity = EmpleadoDomainEntity> {

    modificarNombre(nombre: EmpleadoDomainEntity):Promise<T>;
    modificarSalario(salario: EmpleadoDomainEntity):Promise<T>;
    modificarDocumento(documento: EmpleadoDomainEntity):Promise<T>;
    modificarTipoEmpleado(tipo: EmpleadoDomainEntity):Promise<T>;

    
    
}

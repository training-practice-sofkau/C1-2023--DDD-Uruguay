import { EmpleadoDomainEntity } from '../entities/empleado/EmpleadoDomainEntity';

export interface EmpleadoDomainService<T extends EmpleadoDomainEntity = EmpleadoDomainEntity> {

    modificarNombre(nombre: string):Promise<T>;
    modificarSalario(salario: number):Promise<T>;
    modificarDocumento(documento: string):Promise<T>;
    modificarTipoEmpleado(tipo: string):Promise<T>;
    
}

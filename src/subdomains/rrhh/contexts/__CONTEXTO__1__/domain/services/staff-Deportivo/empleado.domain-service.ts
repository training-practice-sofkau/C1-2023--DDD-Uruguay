import { EmpleadoDomainEntity } from '../../entities/empleado/EmpleadoDomainEntity';
import { IModificarNombreCommands, IModificarSalarioCommands, IModificarDocumentoCommands, IModificarTipoEmpleadoCommands } from '../../interfaces';

export interface IEmpleadoDomainService<T extends EmpleadoDomainEntity = EmpleadoDomainEntity> {

    modificarNombre(nombre: IModificarNombreCommands):Promise<T>;
    modificarSalario(salario: IModificarSalarioCommands):Promise<T>;
    modificarDocumento(documento: IModificarDocumentoCommands):Promise<T>;
    modificarTipoEmpleado(tipo: IModificarTipoEmpleadoCommands):Promise<T>;

    
    
}

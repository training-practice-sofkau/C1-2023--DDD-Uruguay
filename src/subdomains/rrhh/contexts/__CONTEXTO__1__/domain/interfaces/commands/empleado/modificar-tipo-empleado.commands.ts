import { TipoEmpleadoValueObject } from '../../../value-objects/tipoEmpleado/tipo-empleado.value-object';

export interface IModificarTipoEmpleadoCommands {
    tipoEmpelado : string | TipoEmpleadoValueObject
}

import { TipoEmpleadoValueObject } from '../../../value-objects/tipoEmpleado/tipo-empleado.value-object';

export interface ModificarTipoEmpleadoCommands {
    tipoEmpelado : string | TipoEmpleadoValueObject
}

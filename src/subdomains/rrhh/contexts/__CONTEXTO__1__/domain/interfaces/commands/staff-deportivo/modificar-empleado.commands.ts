import { IdValueObject } from '../../../value-objects/id/id.value-object';
import { CostoValueObject } from '../../../value-objects/costo/costo.value-object';

export interface IModificarSalarioEmpleadoCommands {

    empleadoId: string | IdValueObject;
    salario : number | CostoValueObject;
}

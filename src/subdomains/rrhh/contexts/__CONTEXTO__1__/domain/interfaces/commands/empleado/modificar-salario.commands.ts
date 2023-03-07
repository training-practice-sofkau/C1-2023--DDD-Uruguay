import { CostoValueObject } from "../../../value-objects/costo";
import { IdValueObject } from '../../../value-objects/id/id.value-object';

export interface IModificarSalarioCommands {
    empleadoId : string | IdValueObject;
    salario : string | CostoValueObject
}

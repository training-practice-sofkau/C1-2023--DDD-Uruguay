import { IdValueObject } from '../../../value-objects/id/id.value-object';
export interface IModificarCostoCommands {
    id: string | IdValueObject;
    costo : number ;
}

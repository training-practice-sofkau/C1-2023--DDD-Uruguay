import { IdValueObject } from '../../../value-objects/id/id.value-object';

export interface IModificarEquipoCommands {
    id:string | IdValueObject;
    equipoNuevoId : string | IdValueObject ;
   
}

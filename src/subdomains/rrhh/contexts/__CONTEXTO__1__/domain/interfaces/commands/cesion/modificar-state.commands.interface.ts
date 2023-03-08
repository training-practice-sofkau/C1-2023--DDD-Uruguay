import { IdValueObject } from '../../../value-objects/id/id.value-object';
export interface IModificarStateCommands {
    id: string | IdValueObject;
    state : boolean ;
}

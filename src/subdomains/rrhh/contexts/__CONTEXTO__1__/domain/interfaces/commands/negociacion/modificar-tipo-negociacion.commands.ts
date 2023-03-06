import { TipoNegociacionValueObject } from '../../../value-objects/tipo-negociacion/tipo-negociacion.value-object';

export interface ModificarTipoNegociacionCommands {
    tipoNegociacion: string | TipoNegociacionValueObject;
}

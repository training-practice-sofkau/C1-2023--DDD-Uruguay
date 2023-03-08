import { DocumentoValueObject } from '../../../value-objects/documento/documento.value-object';

export interface IModificarDocumentoCommands {
    documento : string | DocumentoValueObject;
}

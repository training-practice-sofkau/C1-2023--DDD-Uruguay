import { DocumentoValueObject } from '../../../value-objects/documento/documento.value-object';

export interface ModificarDocumentoCommands {
    documento : string | DocumentoValueObject;
}

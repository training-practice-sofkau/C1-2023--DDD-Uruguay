import { IdValueObject, NombreValueObject, DocumentoValueObject, NacionalidadValueObject, EdadValueObject } from "../../../value-objects";
import { CostoValueObject } from "../../../value-objects/costo";
import { TipoEmpleadoValueObject } from "../../../value-objects/tipoEmpleado/tipo-empleado.value-object";

export interface NegociacionDomainEntityInterface {
    negociacionId: string | IdValueObject,
    equipoSalidaId: string | IdValueObject,
    equipoEntradaId: string | IdValueObject,
    
    nombre: string | NombreValueObject,
    documento: string | DocumentoValueObject,
    tipoEmpleado?: string | TipoEmpleadoValueObject,
    nacionalidad ?: string | NacionalidadValueObject,
    edad ?: number | EdadValueObject,
    salario?: number | CostoValueObject
}

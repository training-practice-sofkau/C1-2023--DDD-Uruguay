import {IdValueObject, NacionalidadValueObject,DocumentoValueObject,NombreValueObject, TipoEmpleadoValueObject, EdadValueObject } from '../../../value-objects';
import { CostoValueObject } from '../../../value-objects/costo';

export interface IEmpleadoDomainEntity {
    empleadoId: string | IdValueObject,
    nombre: string | NombreValueObject,
    documento: string | DocumentoValueObject,
    tipoEmpleado?: string | TipoEmpleadoValueObject,
    nacionalidad ?: string | NacionalidadValueObject,
    edad ?: number | EdadValueObject,
    salario?: number | CostoValueObject
}

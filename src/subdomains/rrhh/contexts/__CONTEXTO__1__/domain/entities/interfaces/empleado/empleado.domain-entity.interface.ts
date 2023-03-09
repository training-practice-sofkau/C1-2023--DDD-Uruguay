import {IdValueObject, NacionalidadValueObject,DocumentoValueObject,NombreValueObject, EdadValueObject } from '../../../value-objects';
import { CostoValueObject } from '../../../value-objects/costo';
import { TipoEmpleadoValueObject } from '../../../value-objects/tipoEmpleado';

export interface IEmpleadoDomainEntity {
    empleadoId?: string | IdValueObject,
    nombre?: string | NombreValueObject,
    documento?: string | DocumentoValueObject,
    tipoEmpleado?: string | TipoEmpleadoValueObject,
    nacionalidad ?: string | NacionalidadValueObject,
    edad ?: number | EdadValueObject,
    salario?: number | CostoValueObject
}

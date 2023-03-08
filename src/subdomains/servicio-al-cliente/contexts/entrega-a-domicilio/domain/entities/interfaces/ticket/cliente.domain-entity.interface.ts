import { ClienteIdValueObject } from "../../../value-objects";
import { DireccionValueObject, NombreValueObject } from "../../../value-objects/ticket/cliente";

/**
 *Interfaz para la entidad Cliente
 *
 * @export
 * @class IClienteDomainEntity
 */
export interface IClienteDomainEntity {
    clienteId?: string | ClienteIdValueObject;
    nombre?: string | NombreValueObject;
    direccion?: string | DireccionValueObject;
    createdAt?: number | Date;
}
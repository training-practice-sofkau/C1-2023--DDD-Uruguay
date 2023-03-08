import { NombreValueObject, RepartidorIdValueObject, VehiculoValueObject } from "../../../value-objects/ticket/repartidor";

/**
 *Interfaz para la entidad Repartidor
 *
 * @export
 * @class IRepartidorDomainEntity
 */
 export interface IRepartidorDomainEntity {
    repartidrId?: string | RepartidorIdValueObject;
    nombre?: string | NombreValueObject;
    vehiculo?: string | VehiculoValueObject;
    createdAt?: number | Date;
}
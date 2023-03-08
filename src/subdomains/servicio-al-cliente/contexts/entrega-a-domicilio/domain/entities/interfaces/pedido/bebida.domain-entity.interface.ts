import { BebidaIdValueObject, NombreValueObject, TamanioValueObject } from '../../../value-objects/pedido/bebida';

/**
 *Interfaz para la entidad Bebida
 *
 * @export
 * @class IBebidaDomainEntity
 */
 export interface IBebidaDomainEntity {
    bebidaId?: string | BebidaIdValueObject;
    nombre?: string | NombreValueObject;
    tamanio?: string | TamanioValueObject;
    createdAt?: number | Date;
}
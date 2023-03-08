import { NombreValueObject, EntradaIdValueObject } from '../../../value-objects/pedido/entrada';

/**
 *Interfaz para la entidad Entrada
 *
 * @export
 * @class IEntradaDomainEntity
 */
 export interface IEntradaDomainEntity {
    entradaId?: string | EntradaIdValueObject;
    nombre?: string | NombreValueObject;
    createdAt?: number | Date;
}
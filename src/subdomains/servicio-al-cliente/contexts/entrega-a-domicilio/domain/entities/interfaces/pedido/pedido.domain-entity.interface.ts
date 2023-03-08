import { IBebidaDomainEntity, IEntradaDomainEntity, IPlatoPrincipalDomainEntity, IPostreDomainEntity } from ".";
import { EstadoValueObject, PedidoIdValueObject, PrecioValueObject } from "../../../value-objects";

/**
 *Interfaz para la entidad Pedido
 *
 * @export
 * @class IPedidoDomainEntity
 */
 export interface IPedidoDomainEntity {
    pedidoId?: string | PedidoIdValueObject;
    estado?: string | EstadoValueObject;
    precio?: number | PrecioValueObject;
    entrada?: IEntradaDomainEntity;
    platoPrincipal?: IPlatoPrincipalDomainEntity;
    bebida?: IBebidaDomainEntity;
    postre?: IPostreDomainEntity;
    createdAt?: number | Date;
}
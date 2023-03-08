import {
    IBebidaDomainEntity,
    IEntradaDomainEntity,
    IPlatoPrincipalDomainEntity,
    IPostreDomainEntity
} from '../../../entities';

/**
 *Interfaz para el comando Crear Pedido
 *
 * @export
 * @interface ICrearPedidoCommand
 */
export interface ICrearPedidoCommand {
    pedidoId?: string;
    estado?: string;
    precio?: number;
    entrada?: IEntradaDomainEntity;
    platoPrincipal?: IPlatoPrincipalDomainEntity;
    bebida?: IBebidaDomainEntity;
    postre?: IPostreDomainEntity;
    createdAt?: number | Date;
}
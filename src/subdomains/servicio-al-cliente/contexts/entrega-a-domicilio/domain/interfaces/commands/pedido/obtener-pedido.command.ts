import {
    IBebidaDomainEntity,
    IEntradaDomainEntity,
    IPlatoPrincipalDomainEntity,
    IPostreDomainEntity
} from '../../../entities';

/**
 *Interfaz para el comando Obtener Pedido
 *
 * @export
 * @interface IObtenerPedidoCommand
 */
export interface IObtenerPedidoCommand {
    pedidoId?: string;
}
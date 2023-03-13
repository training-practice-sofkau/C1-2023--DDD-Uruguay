import { PedidoDomainEntityBase } from '../../../entities';

/**
 *Interfaz para la respuesta a Obtener Pedido
 *
 * @export
 * @interface IPedidoObtenidoResponse
 */
export interface IPedidoObtenidoResponse {
    success: boolean;
    data: PedidoDomainEntityBase | null;
}
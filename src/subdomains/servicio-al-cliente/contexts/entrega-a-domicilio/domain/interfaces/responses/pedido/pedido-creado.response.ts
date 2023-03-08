import { PedidoDomainEntityBase } from '../../../entities';

/**
 *Interfaz para la respuesta a Crear Pedido
 *
 * @export
 * @interface IPedidoreadoResponse
 */
export interface IPedidoCreadoResponse {
    success: boolean;
    data: PedidoDomainEntityBase | null;
}
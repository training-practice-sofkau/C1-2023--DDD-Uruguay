import { PedidoDomainEntityBase } from '../../../entities/pedido';

/**
 *Interfaz para la respuesta a Pedido Agregado
 *
 * @export
 * @interface IPedidoAgregadoResponse
 */
 export interface IPedidoAgregadoResponse {
    success: boolean;
    data: PedidoDomainEntityBase | null;
}
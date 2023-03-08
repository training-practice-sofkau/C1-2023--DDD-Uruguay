
/**
 *Interfaz para el comando Cambiar Estado Pedido
 *
 * @export
 * @interface ICambiarEstadoPedidoCommand
 */
 export interface ICambiarEstadoPedidoCommand {
    pedidoId?: string;
    estado?: string;
}
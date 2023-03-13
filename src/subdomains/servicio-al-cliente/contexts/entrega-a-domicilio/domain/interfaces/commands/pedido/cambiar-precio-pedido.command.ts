
/**
 *Interfaz para el comando Cambiar Precio Pedido
 *
 * @export
 * @interface ICambiarPrecioPedidoCommand
 */
 export interface ICambiarPrecioPedidoCommand {
    pedidoId?: string;
    nuevoPrecio?: number;
}
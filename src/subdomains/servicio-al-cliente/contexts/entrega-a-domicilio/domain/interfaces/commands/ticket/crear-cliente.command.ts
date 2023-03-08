
/**
 *Interfaz para el comando Crear Cliente
 *
 * @export
 * @interface ICrearClienteCommand
 */
export interface ICrearClienteCommand {
    clienteId?: string;
    nombre?: string;
    direccion?: string;
    createdAt?: number | Date;
}
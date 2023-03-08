
/**
 *Interfaz para el comando Crear Bebida
 *
 * @export
 * @interface ICrearBebidaCommand
 */
 export interface ICrearBebidaCommand {
    bebidaId?: string;
    nombre?: string;
    tamanio?: string;
    createdAt?: number | Date;
}
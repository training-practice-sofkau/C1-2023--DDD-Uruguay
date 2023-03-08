
/**
 *Interfaz para el comando Crear Entrada
 *
 * @export
 * @interface ICrearEntradaCommand
 */
 export interface ICrearEntradaCommand {
    entradaId?: string;
    nombre?: string;
    createdAt?: number | Date;
}

/**
 *Interfaz para el comando Crear Postre
 *
 * @export
 * @interface ICrearPostreCommand
 */
export interface ICrearPostreCommand {
    postreId?: string;
    nombre?: string;
    tamanio?: string;
    esParaVeganos?: boolean;
    createdAt?: number | Date;
}
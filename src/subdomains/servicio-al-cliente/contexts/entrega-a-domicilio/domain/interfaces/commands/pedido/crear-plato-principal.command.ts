
/**
 *Interfaz para el comando Crear Plato principal
 *
 * @export
 * @interface ICrearPlatoPrincipalCommand
 */
export interface ICrearPlatoPrincipalCommand {
    platoPrincipalId?: string;
    nombre?: string;
    guarnicion?: string;
    createdAt?: number | Date;
}

/**
 *Interfaz para el comando Crear Repartidor
 *
 * @export
 * @interface ICrearRepartidorCommand
 */
export interface ICrearRepartidorCommand {
    repartidorId?: string;
    nombre?: string;
    vehiculo?: string;
    createdAt?: number | Date;
}
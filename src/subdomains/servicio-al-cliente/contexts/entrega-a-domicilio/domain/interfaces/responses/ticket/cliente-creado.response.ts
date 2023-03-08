import { ClienteDomainEntityBase } from '../../../entities';

/**
 *Interfaz para la respuesta a Crear Cliente
 *
 * @export
 * @interface IClienteCreadoResponse
 */
export interface IClienteCreadoResponse {
    success: boolean;
    data: ClienteDomainEntityBase | null;
}
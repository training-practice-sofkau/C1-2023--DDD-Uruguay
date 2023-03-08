import { PlatoPrincipalDomainEntityBase } from '../../../entities';

/**
 *Interfaz para la respuesta a Crear Plato principal
 *
 * @export
 * @interface IPlatoPrincipalCreadoResponse
 */
export interface IPlatoPrincipalCreadoResponse {
    success: boolean;
    data: PlatoPrincipalDomainEntityBase | null;
}
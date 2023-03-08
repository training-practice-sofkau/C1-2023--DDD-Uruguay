import { RepartidorDomainEntityBase } from '../../../entities';

/**
 *Interfaz para la respuesta a Crear Repartidor
 *
 * @export
 * @interface IRepartidorCreadoResponse
 */
export interface IRepartidorCreadoResponse {
    success: boolean;
    data: RepartidorDomainEntityBase | null;
}
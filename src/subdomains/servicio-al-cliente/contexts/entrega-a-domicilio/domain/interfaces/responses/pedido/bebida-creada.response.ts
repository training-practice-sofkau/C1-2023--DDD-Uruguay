import { BebidaDomainEntityBase } from '../../../entities';

/**
 *Interfaz para la respuesta a Crear Bebida
 *
 * @export
 * @interface IBebidaCreadaResponse
 */
export interface IBebidaCreadaResponse {
    success: boolean;
    data: BebidaDomainEntityBase | null;
}
import { BebidaDomainEntityBase} from '../../../entities';

/**
 *Interfaz para la respuesta a Obtener Bebida
 *
 * @export
 * @interface IBebidaObtenidaResponse
 */
export interface IBebidaObtenidaResponse {
    success: boolean;
    data: BebidaDomainEntityBase | null;
}
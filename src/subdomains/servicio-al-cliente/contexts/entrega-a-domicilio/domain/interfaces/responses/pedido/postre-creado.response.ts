import { PostreDomainEntityBase } from '../../../entities';

/**
 *Interfaz para la respuesta a Crear Postre
 *
 * @export
 * @interface IPostreCreadoResponse
 */
export interface IPostreCreadoResponse {
    success: boolean;
    data: PostreDomainEntityBase | null;
}
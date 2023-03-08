import { EntradaDomainEntityBase } from '../../../entities';

/**
 *Interfaz para la respuesta a Crear Entrada
 *
 * @export
 * @interface IEntradaCreadaResponse
 */
export interface IEntradaCreadaResponse {
    success: boolean;
    data: EntradaDomainEntityBase | null;
}
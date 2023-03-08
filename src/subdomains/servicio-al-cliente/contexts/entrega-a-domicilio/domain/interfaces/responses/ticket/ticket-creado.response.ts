import { TicketDomainEntityBase } from '../../../entities/ticket/ticket.domain-entity';

/**
 *Interfaz para la respuesta a Crear Ticket
 *
 * @export
 * @interface ITicketCreadoResponse
 */
export interface ITicketCreadoResponse {
    success: boolean;
    data: TicketDomainEntityBase | null;
}
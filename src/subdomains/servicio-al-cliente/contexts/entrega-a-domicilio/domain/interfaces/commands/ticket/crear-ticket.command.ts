import { IClienteDomainEntity, IPedidoDomainEntity, IRepartidorDomainEntity } from '../../../entities/interfaces';

/**
 *Interfaz para el comando Crear Ticket
 *
 * @export
 * @interface ICrearTicketCommand
 */
export interface ICrearTicketCommand {
    ticketId?: string;
    listaPedidos?: IPedidoDomainEntity[];
    cliente?: IClienteDomainEntity;
    repartidor?: IRepartidorDomainEntity;
    createdAt?: number | Date;
}
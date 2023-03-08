import { TicketIdValueObject } from "../../../value-objects";
import { IPedidoDomainEntity } from "../pedido";
import { IClienteDomainEntity, IRepartidorDomainEntity } from './';

/**
 *Interfaz para la entidad Ticket
 *
 * @export
 * @class ITicketDomainEntity
 */
 export interface ITicketDomainEntity {
    ticketId?: string | TicketIdValueObject;
    cliente?: IClienteDomainEntity;
    repartidor?: IRepartidorDomainEntity;
    listaPedidos?: IPedidoDomainEntity[];
    createdAt?: number | Date;
}
import { DateValueObject, IdValueObject, QuantityValueObject, TicketTypeValueObject, TotalPriceValueObject } from "../../value-objects";
import { IClientDomainEntity } from "./client.domain-entity.interface";
import { ISellerDomainEntity } from "./seller.domain-entity.interface";

export interface ITicketDomainEntity {
    ticketId: string | IdValueObject
    productId: string | IdValueObject
    seller: ISellerDomainEntity
    client: IClientDomainEntity
    totalPrice: number | TotalPriceValueObject
    type: string | TicketTypeValueObject
    quantity: number | QuantityValueObject
    date: Date | DateValueObject
}
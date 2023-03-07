import { ClientDomainBase } from "../../../entities/Order-domain/client-domain-entity";
import { MangaDomainBase } from "../../../entities/Order-domain/manga-domain-entity";
import { OrderDomainEntityBase } from "../../../entities/Order-domain/Order-domain-entity"
import { IdOrdertValueObject } from "../../../value-objects";

export interface UpdateOrder {
    OrderId: string
    OrderData:{ client: ClientDomainBase;
    Manga: MangaDomainBase;
    orderId?: string | IdOrdertValueObject }
}

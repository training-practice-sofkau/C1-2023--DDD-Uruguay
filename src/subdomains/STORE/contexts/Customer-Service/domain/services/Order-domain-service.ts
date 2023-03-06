import { OrderDomainEntityBase } from "../entities/Order-domain/Order-domain-entity";


export interface IorderDomainService 
 < T extends OrderDomainEntityBase = OrderDomainEntityBase >  {
    RegisterOrder(order: T): Promise <T>;
    GetClient(ClientId: string): Promise <T>;
    UpdateOrder(OrderId: string ): Promise <T>
    Delete(OrderId: string ): Promise <T>
    GetManga(MangaId: string): Promise <T>;
    AddClient(MangaId: string): Promise <T>;
    UpdateMangaStock(MangaId: string): Promise <T>;
    UpdateClient(ClientId: string): Promise <T>;
 }
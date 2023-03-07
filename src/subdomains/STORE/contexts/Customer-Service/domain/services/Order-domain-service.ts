import { OrderDomainEntityBase } from "../entities/Order-domain/Order-domain-entity";
import { ClientDomainBase } from '../entities/Order-domain/client-domain-entity';
import { MangaDomainBase } from "../entities/Order-domain/manga-domain-entity";


export interface IorderDomainService 
 < T extends OrderDomainEntityBase = OrderDomainEntityBase >  {
    RegisterOrder(order: T): Promise <T>;
    GetClient(ClientId: string): Promise <ClientDomainBase>;
    UpdateOrder(OrderId: string ): Promise <T>
    Delete(OrderId: string ): Promise <T>
    GetManga(MangaId: string): Promise <MangaDomainBase>;
    AddClient(MangaId: string): Promise <ClientDomainBase>;
    UpdateMangaStock(MangaId: string): Promise <T>;
    UpdateClient(ClientId: string): Promise <ClientDomainBase>;
 }
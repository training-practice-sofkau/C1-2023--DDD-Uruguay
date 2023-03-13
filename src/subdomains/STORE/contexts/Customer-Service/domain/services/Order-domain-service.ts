import { OrderDomainEntityBase } from "../entities/Order-domain/Order-domain-entity";
import { ClientDomainBase } from '../entities/Order-domain/client-domain-entity';
import { MangaDomainBase } from "../entities/Order-domain/manga-domain-entity";
import { IGetClient } from "../interfaces/commands/Order-commands/get-client-command";
import { IUpdateOrder } from "../interfaces/commands/Order-commands/update-order-command";
import { IDeleteOrder } from '../interfaces/commands/Order-commands/delete-command';
import { IGetMangaData } from "../interfaces/commands/Sale-commands/Bill-Comands/get-manga-data-command";
import { IAddClient } from "../interfaces/commands/Order-commands/add-client-command";
import { IUpdateMangaStock } from '../interfaces/commands/Order-commands/update-manga-stock-command';
import { IUpdateClient } from "../interfaces/commands/Order-commands/update-client-command";


export interface IorderDomainService 
 < T extends OrderDomainEntityBase = OrderDomainEntityBase >  {
    RegisterOrder(data: T): Promise <T>;
    GetClient(data: string): Promise <ClientDomainBase>;
    Delete(data: string): Promise <T>
    GetManga(data: string): Promise <MangaDomainBase>;
    AddClient(data: ClientDomainBase): Promise <ClientDomainBase>;
    UpdateMangaStock(data: IUpdateMangaStock ): Promise <MangaDomainBase>;
 }
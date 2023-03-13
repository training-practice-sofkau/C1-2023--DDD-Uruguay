import { ClientDomainBase, MangaDomainBase } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { IUpdateOrder, IDeleteOrder, IUpdateMangaStock, IUpdateClient } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands";
import { IorderDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { OrderService } from "../../../services";
import { OrderEntityDb } from "../entities";

export class OrdertMySqlService implements IorderDomainService<OrderEntityDb> {
    RegisterOrder(data: OrderEntityDb): Promise<OrderEntityDb> {
        throw new Error("Method not implemented.");
    }
    GetClient(data: string): Promise<ClientDomainBase> {
        throw new Error("Method not implemented.");
    }
    UpdateOrder(data: IUpdateOrder): Promise<OrderEntityDb> {
        throw new Error("Method not implemented.");
    }
    Delete(data: IDeleteOrder): Promise<OrderEntityDb> {
        throw new Error("Method not implemented.");
    }
    GetManga(data: string): Promise<MangaDomainBase> {
        throw new Error("Method not implemented.");
    }
    AddClient(data: ClientDomainBase): Promise<ClientDomainBase> {
        throw new Error("Method not implemented.");
    }
    UpdateMangaStock(data: IUpdateMangaStock): Promise<MangaDomainBase> {
        throw new Error("Method not implemented.");
    }
    UpdateClient(data: IUpdateClient): Promise<ClientDomainBase> {
        throw new Error("Method not implemented.");
    }
}

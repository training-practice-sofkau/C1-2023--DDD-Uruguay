import { Injectable } from "@nestjs/common";
import { OrderDomainEntityBase, ClientDomainBase, MangaDomainBase } from "../../../../domain/entities";
import { IUpdateOrder, IDeleteOrder, IUpdateMangaStock, IUpdateClient } from "../../../../domain/interfaces/commands";
import { IorderDomainService } from "../../../../domain/services";

@Injectable()
export class OrderService implements IorderDomainService {
  RegisterOrder(data: OrderDomainEntityBase): Promise<OrderDomainEntityBase> {
    throw new Error("Method not implemented.");
  }
  GetClient(data: string): Promise<ClientDomainBase> {
    throw new Error("Method not implemented.");
  }
  UpdateOrder(data: IUpdateOrder): Promise<OrderDomainEntityBase> {
    throw new Error("Method not implemented.");
  }
  Delete(data: IDeleteOrder): Promise<OrderDomainEntityBase> {
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
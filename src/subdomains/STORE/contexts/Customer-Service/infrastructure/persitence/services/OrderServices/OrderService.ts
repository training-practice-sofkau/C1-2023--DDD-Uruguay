import { Injectable } from "@nestjs/common";
import { OrderDomainEntityBase, ClientDomainBase, MangaDomainBase } from "../../../../domain/entities";
import { IRegisterOrder, IGetClient, IUpdateOrder, IDeleteOrder, IGetMangaData, IAddClient, IUpdateMangaStock, IUpdateClient } from "../../../../domain/interfaces";
import { IorderDomainService } from "../../../../domain/services";

@Injectable()
export class OrderService implements IorderDomainService {
  RegisterOrder(data: OrderDomainEntityBase): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }
  GetClient(data: IGetClient): Promise<ClientDomainBase> {
    throw new Error('Method not implemented.');
  }
  UpdateOrder(data: IUpdateOrder): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }
  Delete(data: IDeleteOrder): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }
  GetManga(data: IGetMangaData): Promise<MangaDomainBase> {
    throw new Error('Method not implemented.');
  }
  AddClient(data: IAddClient): Promise<ClientDomainBase> {
    throw new Error('Method not implemented.');
  }
  UpdateMangaStock(data: IUpdateMangaStock): Promise<MangaDomainBase> {
    throw new Error('Method not implemented.');
  }
  UpdateClient(data: IUpdateClient): Promise<ClientDomainBase> {
    throw new Error('Method not implemented.');
  }

  private readonly datos: any[] = [];

  

}
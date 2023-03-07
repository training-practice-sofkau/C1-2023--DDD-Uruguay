import { Injectable } from '@nestjs/common';
import { ClientDomainBase } from '../../../../domain/entities/Order-domain/client-domain-entity';
import { MangaDomainBase } from '../../../../domain/entities/Order-domain/manga-domain-entity';
import { OrderDomainEntityBase } from '../../../../domain/entities/Order-domain/Order-domain-entity';
import { IAddClient } from '../../../../domain/interfaces/commands/Order-commands/add-client-command';
import { IDeleteOrder } from '../../../../domain/interfaces/commands/Order-commands/delete-command';
import { IGetClient } from '../../../../domain/interfaces/commands/Order-commands/get-client-command';
import { IRegisterOrder } from '../../../../domain/interfaces/commands/Order-commands/register.order-command';
import { IUpdateClient } from '../../../../domain/interfaces/commands/Order-commands/update-client-command';
import { IUpdateMangaStock } from '../../../../domain/interfaces/commands/Order-commands/update-manga-stock-command';
import { IUpdateOrder } from '../../../../domain/interfaces/commands/Order-commands/update-order-command';
import { IGetMangaData } from '../../../../domain/interfaces/commands/Sale-commands/Bill-Comands/get-manga-data-command';
import { IorderDomainService } from '../../../../domain/services/Order-domain-service';

@Injectable()
export class OrderService implements IorderDomainService {
  RegisterOrder(data: IRegisterOrder): Promise<OrderDomainEntityBase> {
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
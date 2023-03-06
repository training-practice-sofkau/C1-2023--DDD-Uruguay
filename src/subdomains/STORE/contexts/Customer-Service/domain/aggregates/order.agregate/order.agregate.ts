import { IorderDomainService } from '../../services/Order-domain-service';
import { ClientDomainService } from '../../services/Client-domain-service';
import { MangaDomainService } from '../../services/Manga-domain-service';
import { OrderDomainEntityBase } from '../../entities/Order-domain/Order-domain-entity';
import { OrderAddEventPublisher } from '../../events/publishers';
import { AggregateRootException } from '../../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { MangaDomainBase } from '../../entities/Order-domain/manga-domain-entity';

export class OrderAgregate
  implements IorderDomainService, ClientDomainService, MangaDomainService
{
  private readonly orderService?: IorderDomainService;
  private readonly RegisterOrderEventPublisher: OrderAddEventPublisher;

  constructor({
    orderService,
    RegisterOrderEventPublisher,
  }: {
    orderService?: IorderDomainService;
    RegisterOrderEventPublisher: OrderAddEventPublisher;
  }) {
    this.orderService = orderService;
    this.RegisterOrderEventPublisher = RegisterOrderEventPublisher;
  }


  UpdateName(name: string): Promise<MangaDomainBase> {
 console.log(name);
 throw new Error('Method not implemented.');
}
  UpdateState(state: number): Promise<MangaDomainBase> {
    throw new Error('Method not implemented.');
  }
  UpdatePrice(Price: number): Promise<MangaDomainBase> {
    throw new Error('Method not implemented.');
  }





  
  








  async RegisterOrder(order: OrderDomainEntityBase): Promise<OrderDomainEntityBase> {

    if(this.orderService && this.RegisterOrderEventPublisher){        
        const result = await this.orderService.RegisterOrder(order);
        this.RegisterOrderEventPublisher.response = result
        this.RegisterOrderEventPublisher.publish()
        return this.RegisterOrderEventPublisher.response

    } 
    throw new AggregateRootException(
        'OrderAgregate "OrderService" y/o "RegisterOrderEventPublisher" no estan definidos'
    )


}
  GetClient(ClientId: string): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }
  UpdateOrder(OrderId: string): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }
  Delete(OrderId: string): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }
  GetManga(MangaId: string): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }
  AddClient(MangaId: string): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }
  UpdateMangaStock(MangaId: string): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }
  UpdateClient(ClientId: string): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }
}

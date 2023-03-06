import { IorderDomainService } from '../../services/Order-domain-service';
import { ClientDomainService } from '../../services/Client-domain-service';
import { MangaDomainService } from '../../services/Manga-domain-service';
import { OrderDomainEntityBase } from '../../entities/Order-domain/Order-domain-entity';
import { ClientAddEventPublisher, ClientModifiedEventPublisher, ClientObtainedEventPublisher, MangaModifiedEventPublisher, MangaObtainedEventPublisher, OrderAddEventPublisher, OrderModifiedEventPublisher } from '../../events/publishers';
import { AggregateRootException } from '../../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { MangaDomainBase } from '../../entities/Order-domain/manga-domain-entity';
import { DeleteOrderEventPublisher } from '../../events/publishers/order/delete-order-event-publisher';
import { ClientDomainBase } from '../../entities/Order-domain/client-domain-entity';


export class OrderAgregate
  implements IorderDomainService, ClientDomainService, MangaDomainService

{

/* 
 In this place go the services

*/
/* A way to define the services that will be used in the aggregate. */
  private readonly orderService?: IorderDomainService;
  private readonly MangaService?: MangaDomainService;
  private readonly ClientService?: ClientDomainService;


/* 
Publisher events go in this place

*/

 /* A way to define the events that will be used in the aggregate. */
  private readonly RegisterOrderEventPublisher: OrderAddEventPublisher;
  private readonly AddCustomerEventPublisher: ClientAddEventPublisher;
  private readonly GetClientEventPublisher: ClientObtainedEventPublisher; 
  private readonly DeleteOrderEventPublisher: DeleteOrderEventPublisher;
  private readonly GetMangaEventPublisher: MangaObtainedEventPublisher;
  private readonly ModifiedClientEventPublisher: ClientModifiedEventPublisher;
  private readonly ModifiedMangaStockingEventPublisher: MangaModifiedEventPublisher;
  private readonly ModifiedOrderEventPublisher: OrderModifiedEventPublisher;





 /**
  * A constructor function that takes in an object as a parameter.
  * @param  - 
  */
  constructor({
    orderService,
    RegisterOrderEventPublisher,
    MangaService,
    ClientService,
    AddCustomerEventPublisher,
    GetClientEventPublisher,
    DeleteOrderEventPublisher,
    GetMangaEventPublisher,
    ModifiedClientEventPublisher,
    ModifiedMangaStockingEventPublisher,
    ModifiedOrderEventPublisher,

  }: {
    AddCustomerEventPublisher?: ClientAddEventPublisher;
    GetClientEventPublisher?: ClientObtainedEventPublisher; 
    DeleteOrderEventPublisher?: DeleteOrderEventPublisher;
    GetMangaEventPublisher?: MangaObtainedEventPublisher;
    ModifiedClientEventPublisher?: ClientModifiedEventPublisher;
    ModifiedMangaStockingEventPublisher?: MangaModifiedEventPublisher;
    ModifiedOrderEventPublisher?: OrderModifiedEventPublisher;
    MangaService?: MangaDomainService
    orderService?: IorderDomainService;
    ClientService?:ClientDomainService
    RegisterOrderEventPublisher: OrderAddEventPublisher;
  }) {


    this.AddCustomerEventPublisher = AddCustomerEventPublisher
    this.GetClientEventPublisher = GetClientEventPublisher; 
    this.GetMangaEventPublisher = GetMangaEventPublisher;
    this.ModifiedClientEventPublisher = ModifiedClientEventPublisher;
    this.ModifiedMangaStockingEventPublisher = ModifiedMangaStockingEventPublisher;
    this.ModifiedOrderEventPublisher = ModifiedOrderEventPublisher; 
    this.DeleteOrderEventPublisher = DeleteOrderEventPublisher;
    this.ClientService = ClientService;
    this.MangaService = MangaService
    this.orderService = orderService;
    this.RegisterOrderEventPublisher = RegisterOrderEventPublisher;
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
 async  GetClient(ClientId: string): Promise<ClientDomainBase> {

    if(this.orderService && this.GetClientEventPublisher)
    {
      const result = await this.orderService.GetClient(ClientId)

      this.GetClientEventPublisher.response = result

      this.GetClientEventPublisher.publish()
      
      return this.GetClientEventPublisher.response

    }

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
  AddClient(MangaId: string): Promise<ClientDomainBase> {
    throw new Error('Method not implemented.');
  }
  UpdateMangaStock(MangaId: string): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }
  UpdateClient(ClientId: string): Promise<ClientDomainBase> {
    throw new Error('Method not implemented.');
  }



 /* 
   * Methods for the manga entity
   *
   */

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

  }
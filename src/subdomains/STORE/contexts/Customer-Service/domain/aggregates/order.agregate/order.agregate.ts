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



/**
 * A function that is called when the RegisterOrder command is received.
 * @param {OrderDomainEntityBase} order - OrderDomainEntityBase: The order to be registered.
 * @returns The response of the event publisher
 */
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
 /**
  * The function GetClient is an async function that returns a Promise of type ClientDomainBase
  * @param {string} ClientId - string
  * @returns The result of the GetClient method of the OrderService
  */
 async  GetClient(ClientId: string): Promise<ClientDomainBase> {

    if(this.orderService && this.GetClientEventPublisher)
    {
      const result = await this.orderService.GetClient(ClientId)

      this.GetClientEventPublisher.response = result

      this.GetClientEventPublisher.publish()
      
      return this.GetClientEventPublisher.response

    }
    throw new AggregateRootException(
      'OrderAgregate "OrderService" y/o "GetClientEventPublisher" no estan definidos'
  )
  }


/**
 * It updates an order.
 * @param {string} OrderId - The order id to be updated.
 * @returns The OrderDomainEntityBase
 */
  async UpdateOrder(OrderId: string): Promise<OrderDomainEntityBase> 
  {
    if(this.orderService && this.ModifiedClientEventPublisher){
      const result = await this.orderService.UpdateOrder(OrderId)
      this.ModifiedOrderEventPublisher.response = result
      this.ModifiedOrderEventPublisher.publish()
      return this.ModifiedOrderEventPublisher.response
    }

    throw new AggregateRootException(
      'OrderAgregate "OrderService" y/o "ModifiedClientEventPublisher" no estan definidos'
  )

  }

/**
 * The function Delete() is an async function that takes an OrderId as a parameter and returns a
 * Promise of type OrderDomainEntityBase
 * @param {string} OrderId - The id of the order to be deleted.
 * @returns The OrderDomainEntityBase
 */

  async Delete(OrderId: string): Promise<OrderDomainEntityBase> {
    if(this.orderService && this.DeleteOrderEventPublisher)
    {
      const result = await this.orderService.Delete(OrderId)

      this.DeleteOrderEventPublisher.response = result

      this.DeleteOrderEventPublisher.publish()
      
      return this.DeleteOrderEventPublisher.response

    }
    throw new AggregateRootException(
      'OrderAgregate "OrderService" y/o "DeleteOrderEventPublisher" no estan definidos'
  )
  }


/**
 * It gets a manga by its id.
 * @param {string} MangaId - The id of the manga to be retrieved.
 * @returns The result of the GetManga method of the OrderService
 */

  async GetManga(MangaId: string): Promise<MangaDomainBase> {

    if(this.orderService && this.GetMangaEventPublisher)
    {
      const result = await this.orderService.GetManga(MangaId)

      this.GetMangaEventPublisher.response = result

      this.GetMangaEventPublisher.publish()
      
      return this.GetMangaEventPublisher.response

    }
    throw new AggregateRootException(
      'OrderAgregate "OrderService" y/o "GetMangaEventPublisher" no estan definidos'
  )
  }



/**
 * It adds a client to the database.
 * @param {string} MangaId - The id of the manga you want to add a client to.
 */
  AddClient(MangaId: string): Promise<ClientDomainBase> {
    throw new Error('Method not implemented.');
  }



 /**
  * It updates the stock of a manga.
  * @param {string} MangaId - The id of the manga you want to update.
  */
  UpdateMangaStock(MangaId: string): Promise<OrderDomainEntityBase> {
    throw new Error('Method not implemented.');
  }


 /**
  * It updates a client.
  * @param {string} ClientId - The unique identifier for the client.
  */
  UpdateClient(ClientId: string): Promise<ClientDomainBase> {
    throw new Error('Method not implemented.');
  }



 /* 
   * Methods for the manga entity
   *
   */

/**
 * It updates the name of the manga.
 * @param {string} name - The name of the manga.
 */
 UpdateName(name: string): Promise<MangaDomainBase> {
  console.log(name);
  throw new Error('Method not implemented.');
 }
/**
 * It updates the state of the manga.
 * @param {number} state - The state of the manga.
 */
   UpdateState(state: number): Promise<MangaDomainBase> {
     throw new Error('Method not implemented.');
   }


/**
 * It updates the price of the manga.
 * @param {number} Price - number - The price of the manga.
 */
   UpdatePrice(Price: number): Promise<MangaDomainBase> {
     throw new Error('Method not implemented.');
   }

  }
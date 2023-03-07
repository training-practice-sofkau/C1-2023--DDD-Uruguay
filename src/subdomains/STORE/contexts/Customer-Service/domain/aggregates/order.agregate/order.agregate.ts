import { IorderDomainService } from '../../services/Order-domain-service';
import { ClientDomainService } from '../../services/Client-domain-service';
import { MangaDomainService } from '../../services/Manga-domain-service';
import { OrderDomainEntityBase } from '../../entities/Order-domain/Order-domain-entity';
import { ClientAddEventPublisher, ClientModifiedEventPublisher, ClientObtainedEventPublisher, MangaModifiedEventPublisher, MangaObtainedEventPublisher, NameMangaModifiedEventPublisher, NameModifiedEventPublisher, OrderAddEventPublisher, OrderModifiedEventPublisher, PhoneModifiedEventPublisher, StateModifiedEventPublisher } from '../../events/publishers';
import { AggregateRootException } from '../../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { MangaDomainBase } from '../../entities/Order-domain/manga-domain-entity';
import { DeleteOrderEventPublisher } from '../../events/publishers/order/delete-order-event-publisher';
import { ClientDomainBase } from '../../entities/Order-domain/client-domain-entity';
import { PrinceModifiedEventPublisher } from '../../events/publishers/order/manga/modified-prince-event-publisher';


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
  private readonly  NameMangaModifiedEventPublisher: NameMangaModifiedEventPublisher
  private readonly PrinceModifiedEventPublisher: PrinceModifiedEventPublisher
  private readonly StateModifiedEventPublisher: StateModifiedEventPublisher
  private readonly NameModifiedEventPublisher: NameModifiedEventPublisher
  private readonly  PhoneModifiedEventPublisher: PhoneModifiedEventPublisher

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
    NameMangaModifiedEventPublisher,
    PrinceModifiedEventPublisher,
    StateModifiedEventPublisher,
    NameModifiedEventPublisher,
    PhoneModifiedEventPublisher

  }: {
    NameModifiedEventPublisher?: NameModifiedEventPublisher
    PhoneModifiedEventPublisher?: PhoneModifiedEventPublisher
    NameMangaModifiedEventPublisher?: NameMangaModifiedEventPublisher
    PrinceModifiedEventPublisher?: PrinceModifiedEventPublisher
    StateModifiedEventPublisher?: StateModifiedEventPublisher
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

    this.NameModifiedEventPublisher = NameModifiedEventPublisher
    this.PhoneModifiedEventPublisher = PhoneModifiedEventPublisher
    this.NameMangaModifiedEventPublisher = NameMangaModifiedEventPublisher
    this.PrinceModifiedEventPublisher = PrinceModifiedEventPublisher
    this.StateModifiedEventPublisher = StateModifiedEventPublisher
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
  async UpdateOrder(OrderId: string, order:OrderDomainEntityBase): Promise<OrderDomainEntityBase> 
  {
    if(this.orderService && this.ModifiedClientEventPublisher){
      const result = await this.orderService.UpdateOrder(OrderId, order)
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
  async AddClient(ClientId: ClientDomainBase): Promise<ClientDomainBase> {
    if(this.orderService && this.AddCustomerEventPublisher)
    {
      const result = await this.orderService.AddClient(ClientId)

      this.AddCustomerEventPublisher.response = result

      this.AddCustomerEventPublisher.publish()
      
      return this.AddCustomerEventPublisher.response

    }
    throw new AggregateRootException(
      'OrderAgregate "OrderService" y/o "AddCustomerEventPublisher" no estan definidos'
  )  }



 /**
  * It updates the stock of a manga.
  * @param {string} MangaId - The id of the manga you want to update.
  */
  async UpdateMangaStock(MangaId: string, stock: number): Promise<MangaDomainBase> {
    if(this.orderService && this.ModifiedMangaStockingEventPublisher)
    {
      const result = await this.orderService.UpdateMangaStock(MangaId, stock)

      this.ModifiedMangaStockingEventPublisher.response = result

      this.ModifiedMangaStockingEventPublisher.publish()
      
      return this.ModifiedMangaStockingEventPublisher.response

    }
    throw new AggregateRootException(
      'OrderAgregate "OrderService" y/o "ModifiedMangaStockingEventPublisher" no estan definidos'
  )
  }


 /**
  * It updates a client.
  * @param {string} ClientId - The unique identifier for the client.
  */
 async UpdateClient(ClientId: string, data: ClientDomainBase): Promise<ClientDomainBase> {
    {
      if(this.orderService && this.ModifiedClientEventPublisher)
      {
        const result = await this.orderService.UpdateClient(ClientId, data)
  
        this.ModifiedClientEventPublisher.response = result
  
        this.ModifiedClientEventPublisher.publish()
        
        return this.ModifiedClientEventPublisher.response
  
      }
      throw new AggregateRootException(
        'OrderAgregate "OrderService" y/o "ModifiedMangaStockingEventPublisher" no estan definidos'
    )
    }
  
  }

 /* 
   * Methods for the manga entity
   *
   */

/**
 * It updates the name of the manga.
 * @param {string} name - The name of the manga.
 */
 async UpdateName(idClient:string, name: string): Promise<MangaDomainBase> {
     if(this.orderService && this.NameMangaModifiedEventPublisher)
    {
      const result = await this.MangaService.UpdateName(idClient, name)

      this.NameMangaModifiedEventPublisher.response = result

      this.NameMangaModifiedEventPublisher.publish()
      
      return this.NameMangaModifiedEventPublisher.response

    }
    throw new AggregateRootException(
      'OrderAgregate "OrderService" y/o "NameMangaModifiedEventPublisher" no estan definidos'
  )
  }
/**
 * It updates the state of the manga.
 * @param {number} state - The state of the manga.
 */
   async UpdateState(idmanga: string , state: number): Promise<MangaDomainBase> {
     if(this.orderService && this.StateModifiedEventPublisher)
     {
       const result = await this.MangaService.UpdateState(idmanga, state)
 
       this.StateModifiedEventPublisher.response = result
 
       this.StateModifiedEventPublisher.publish()
       
       return this.StateModifiedEventPublisher.response
 
     }
     throw new AggregateRootException(
       'OrderAgregate "OrderService" y/o "StateModifiedEventPublisher" no estan definidos'
   )
   }


/**
 * It updates the price of the manga.
 * @param {number} Price - number - The price of the manga.
 */
   async  UpdatePrice(idmanga: string ,Price: number): Promise<MangaDomainBase> {
     if(this.orderService && this.PrinceModifiedEventPublisher)
     {
       const result = await this.MangaService.UpdateState(idmanga, Price)
 
       this.PrinceModifiedEventPublisher.response = result
 
       this.PrinceModifiedEventPublisher.publish()
       
       return this.PrinceModifiedEventPublisher.response
 
     }
     throw new AggregateRootException(
       'OrderAgregate "OrderService" y/o "PrinceModifiedEventPublisher" no estan definidos'
   )
   }
  

  async UpdateClientName(idclient: string,name: string): Promise<ClientDomainBase> {
    if(this.orderService && this.NameModifiedEventPublisher)
     {
       const result = await this.ClientService.UpdateClientName(idclient,name)
 
       this.NameModifiedEventPublisher.response = result
 
       this.NameModifiedEventPublisher.publish()
       
       return this.NameModifiedEventPublisher.response
 
     }
     throw new AggregateRootException(
       'OrderAgregate "ClientService" y/o "NameModifiedEventPublisher" no estan definidos'
   )
   }


 /* The above code is a sample of a domain event handler. */
  async UpdateClientPhone(idclient: string, phone: number): Promise<ClientDomainBase> {
    if(this.orderService && this.PhoneModifiedEventPublisher)
    {
      const result = await this.ClientService.UpdateClientPhone(idclient,phone)

      this.PhoneModifiedEventPublisher.response = result

      this.PhoneModifiedEventPublisher.publish()
      
      return this.PhoneModifiedEventPublisher.response

    }
    throw new AggregateRootException(
      'OrderAgregate "ClientService" y/o "NameModifiedEventPublisher" no estan definidos'
  )
  }}

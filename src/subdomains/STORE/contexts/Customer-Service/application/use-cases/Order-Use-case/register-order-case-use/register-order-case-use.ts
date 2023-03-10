import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates/order.agregate";
import { ClientDomainBase, IOrderentity, OrderDomainEntityBase } from "../../../../domain/entities";
import { ClientObtainedEventPublisher, MangaObtainedEventPublisher, OrderAddEventPublisher } from "../../../../domain/events";
import { IRegisterOrder, RegisterdOrderResponse } from "../../../../domain/interfaces";
import { ClientDomainService, IorderDomainService, MangaDomainService } from "../../../../domain/services";
import { IdOrdertValueObject } from "../../../../domain/value-objects";
import { GetClientCaseUse } from "../get-client-case-use/get-client-case-use";
import { GetMangaCaseUse } from '../get-manga-case-use/get-manga-case-use';

export class RegisterOrderCaseUse<
    Command extends IRegisterOrder = IRegisterOrder,
    Response extends RegisterdOrderResponse =  RegisterdOrderResponse

>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;
    private readonly GetClientCaseUse: GetClientCaseUse
    private readonly GetMangaCaseUse: GetMangaCaseUse

    constructor(
        
        private readonly orderService: IorderDomainService,
        private readonly RegisterOrderEventPublisher: OrderAddEventPublisher,
        private readonly ClientService: ClientDomainService,
        private readonly GetClientEventPublisher: ClientObtainedEventPublisher,
        private readonly MangaService: MangaDomainService,
        private readonly GetMangaEventPublisher: MangaObtainedEventPublisher,
    
    ) {
        super();
        this.OrderAgregate = new OrderAgregate({
            orderService,
            RegisterOrderEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<OrderDomainEntityBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityClientDomain(ValueObject);
        return this.exectueOrderAggregateRoot((await entity))
    }


    private createValueObject(
        command: Command
    ): OrderDomainEntityBase {

        const orderId = new IdOrdertValueObject(command.idOrder);

        return {
            orderId            
        }
    }
    
    
    private validateValueObject(
        valueObject: OrderDomainEntityBase
    ): void {
       
        const {
            orderId
        } = valueObject

        if (orderId.hasErrors())
            this.setErrors(orderId.getErrors());
         
        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para agregar order',
                this.getErrors(),
            );

    }

    private async createEntityClientDomain(
        valueObject: IOrderentity
    ): Promise<OrderDomainEntityBase> {

        const responseClient = this.GetClientCaseUse.execute({ClientID: valueObject.orderId.value})

        const responseManga = this.GetMangaCaseUse.execute({MangaID: valueObject.orderId.value})
      
        const {            
            orderId
        } = valueObject



        return new OrderDomainEntityBase({
            client: (await responseClient).data ,
            Manga: (await responseManga).data,
            orderId: orderId
        })
    }



    private exectueOrderAggregateRoot(
        entity: OrderDomainEntityBase,
    ): Promise<OrderDomainEntityBase | null> {
        return this.OrderAgregate.RegisterOrder(entity)
    }
}
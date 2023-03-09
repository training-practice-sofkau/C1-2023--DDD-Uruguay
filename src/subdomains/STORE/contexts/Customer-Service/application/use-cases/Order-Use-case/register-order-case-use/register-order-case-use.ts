import { async } from "rxjs";
import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates/order.agregate";
import { ClientDomainBase, IOrderentity, OrderDomainEntityBase } from "../../../../domain/entities";
import { ClientObtainedEventPublisher, MangaObtainedEventPublisher, OrderAddEventPublisher } from "../../../../domain/events";
import { IRegisterOrder, RegisterdOrderResponse } from "../../../../domain/interfaces";
import { ClientDomainService, MangaDomainService } from "../../../../domain/services";
import { IdOrdertValueObject } from "../../../../domain/value-objects";
import { OrderService } from '../../../../infrastructure/persitence/services/OrderServices/OrderService';
import { GetClientCaseUse } from "../get-client-case-use/get-client-case-use";
import { GetMangaCaseUse } from '../get-manga-case-use/get-manga-case-use';
import { IClientEntity } from '../../../../domain/entities/interfaces/Order/client.interface';

export class RegisterOrderCaseUse<
    Command extends IRegisterOrder = IRegisterOrder,
    Response extends RegisterdOrderResponse =  RegisterdOrderResponse

>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;
    database: ClientDomainBase[]  = [];

    constructor(
        private readonly orderService: OrderService,
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
        return this.exectueOrderAggregateRoot(entity)
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

        const getClientUseCase = new GetClientCaseUse(this.ClientService , this.GetClientEventPublisher);
        const responseClient = getClientUseCase.execute({ClientID: valueObject.orderId.value})

        const getMangaCaseUse = new GetMangaCaseUse(this.MangaService , this.GetMangaEventPublisher);
        const responseManga = getMangaCaseUse.execute({MangaID: valueObject.orderId.value})
      
        const { 
            client,
            Manga,
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
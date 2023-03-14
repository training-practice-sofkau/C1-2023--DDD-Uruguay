import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates";
import { OrderDomainEntityBase } from "../../../../domain/entities";
import { OrderAddEventPublisher } from "../../../../domain/events/publishers/order";
import { IRegisterOrder } from "../../../../domain/interfaces/commands/Order-commands/register.order-command";
import { RegisterdOrderResponse } from "../../../../domain/interfaces/responses/Order-Response";
import { IorderDomainService } from "../../../../domain/services";
import { IdOrdertValueObject } from "../../../../domain/value-objects";
import { GetClientCaseUse } from "../get-client-case-use";
import { GetMangaCaseUse } from "../get-manga-case-use";

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
        const entity = this.createEntityClientDomain(command);
        this.validateValueObject((await entity));

        return this.exectueOrderAggregateRoot((await entity))
    }


    
    
    private validateValueObject(
        valueObject: OrderDomainEntityBase
    ): void {
       
        const {
            orderId
        } = valueObject

        if (orderId instanceof  IdOrdertValueObject && orderId.hasErrors())
            this.setErrors(orderId.getErrors());
         
        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para agregar order',
                this.getErrors(),
            );

    }

    private async createEntityClientDomain(
        command: Command,
    ): Promise<OrderDomainEntityBase> {
        
        const responseClient = this.GetClientCaseUse.execute({ClientID: command.clientID})

        const responseManga = this.GetMangaCaseUse.execute({MangaID: command.MangaID})
      
        const orderId = new IdOrdertValueObject(command.idOrder);

        if (!responseClient  || !responseManga) 
        {  throw new ValueObjectException(
            'Error al obtener datos ',
            this.getErrors(),
        ); }

        return new OrderDomainEntityBase({
            client:  (await responseClient).data ,
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
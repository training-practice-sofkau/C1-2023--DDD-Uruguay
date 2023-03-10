import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "src/subdomains/Store/contexts/Customer-Service/domain/aggregates/order.agregate";
import { SaleAgregate } from "src/subdomains/STORE/contexts/Customer-Service/domain/aggregates/sale.agregate";
import { ClientDomainBase, IBillEntity, IClientEntity, IMangaEntity, MangaDomainBase } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { ClientObtainedEventPublisher, MangaModifiedEventPublisher, NameMangaModifiedEventPublisher, NameModifiedEventPublisher, PaymentMethodEventPublisher } from "src/subdomains/Store/contexts/Customer-Service/domain/events";
import { PaymentMethodUpdatedResponse, UpdateNameClient, UpdateNameManga, UpdatePaymentMethod, UpdatePhoneClient, UpradedNameMangaResponse, UpradedNameResponse, UpradedPhoneResponse } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces";
import { BillDomainService, ClientDomainService, MangaDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { ClientNameValue, IdclientValue, IdmangaValue, NameMangaValue, PhoneValue } from "src/subdomains/Store/contexts/Customer-Service/domain/value-objects";
import { PhoneModifiedEventPublisher } from '../../../../../domain/events/publishers/order/client/modified-Phone-event-publisher';

export class UpdatePaymentUseCase<
    Command extends UpdatePaymentMethod = UpdatePaymentMethod,
    Response extends PaymentMethodUpdatedResponse = PaymentMethodUpdatedResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly SaleAgregate: SaleAgregate;

    constructor(
        private readonly billService: BillDomainService,
        private readonly PaymentMethodEventPublisher: PaymentMethodEventPublisher,
    ) {
        super();
        this.SaleAgregate = new SaleAgregate({
            billService,
            PaymentMethodEventPublisher
            
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<BillDomain | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityClientDomain(ValueObject);
        return this.exectueOrderAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IBillEntity {
        const idBill =  new IdmangaValue(command.idBill)
        const  paymentMethod  = new  NameMangaValue (command.paymentMethod)
        return {
            IDBill,
            PaymentMethod
        }
    }

    private validateValueObject(
        valueObject: MangaDomainBase
    ): void {
        
        const {
            Mangaid,
            Name
        } = valueObject
      
      
        if ( Mangaid.hasErrors())
        this.setErrors(Mangaid.getErrors());

        if (Name.hasErrors())
            this.setErrors(Name.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para cambiar el nombre   del manga  ',
                this.getErrors(),
            );

    }

    private createEntityClientDomain(
        
        valueObject: MangaDomainBase

    ): MangaDomainBase {
       
        const {
            Name,
            Mangaid
        } = valueObject

        return new MangaDomainBase({          
            Name: Name,
            Mangaid: Mangaid
        })

    }

    private exectueOrderAggregateRoot(
        entity: MangaDomainBase,
    ): Promise<MangaDomainBase | null> {
        return this.OrderAgregate.UpdateName(entity)
    }
}
import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "src/subdomains/Store/contexts/Customer-Service/domain/aggregates/order.agregate";
import { SaleAgregate } from "src/subdomains/STORE/contexts/Customer-Service/domain/aggregates/sale.agregate";
import { BillDomain, ClientDomainBase, IBillEntity, IClientEntity, IMangaEntity, MangaDomainBase } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { ClientObtainedEventPublisher, MangaModifiedEventPublisher, NameMangaModifiedEventPublisher, NameModifiedEventPublisher, PaymentMethodEventPublisher } from "src/subdomains/Store/contexts/Customer-Service/domain/events";
import { PaymentMethodUpdatedResponse, UpdateNameClient, UpdateNameManga, UpdatePaymentMethod, UpdatePhoneClient, UpradedNameMangaResponse, UpradedNameResponse, UpradedPhoneResponse } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces";
import { BillDomainService, ClientDomainService, MangaDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { ClientNameValue, IdbillValue, IdclientValue, IdmangaValue, NameMangaValue, PaymentMethodValue, PhoneValue } from "src/subdomains/Store/contexts/Customer-Service/domain/value-objects";
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
        const entity = this.createentityPaymenMethodUpdate(ValueObject);
        return this.exectueSaleAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IBillEntity {
        const IDBill =  new IdbillValue(command.idBill)
        const  PaymentMethod  = new  PaymentMethodValue (command.paymentMethod)
        return {
            IDBill,
            PaymentMethod
        }
    }

    private validateValueObject(
        valueObject: BillDomain
    ): void {
        
        const {
            IDBill,
            PaymentMethod
        } = valueObject
      
      
        if ( IDBill.hasErrors())
        this.setErrors(IDBill.getErrors());

        if (PaymentMethod.hasErrors())
            this.setErrors(PaymentMethod.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para cambiar el metodo de pago a  ',
                this.getErrors(),
            );

    }

    private createentityPaymenMethodUpdate(
        
        valueObject: BillDomain

    ): BillDomain {
       
        const {
            IDBill,
            PaymentMethod
        } = valueObject

        return new BillDomain({          
            IDBill: IDBill,
            PaymentMethod: PaymentMethod
        })

    }

    private exectueSaleAggregateRoot(
        entity: BillDomain,
    ): Promise<BillDomain | null> {
        return this.SaleAgregate.UpdatePaymentMethod(entity)
    }
}
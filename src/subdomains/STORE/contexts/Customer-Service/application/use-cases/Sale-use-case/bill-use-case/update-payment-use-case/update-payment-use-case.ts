import { PaymentMethodEventPublisher } from './../../../../../domain/events/publishers/Sale/Bill/Payment-method-event-publisher';
import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { SaleAgregate } from "src/subdomains/Store/contexts/Customer-Service/domain/aggregates";
import { BillDomain, IBillEntity } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { UpdatePaymentMethod } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands";
import { PaymentMethodUpdatedResponse } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/responses/Sale-Response";
import { BillDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { IdbillValue, PaymentMethodValue } from "src/subdomains/Store/contexts/Customer-Service/domain/value-objects";

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
      
      
        if ( IDBill instanceof IdbillValue && IDBill.hasErrors())
        this.setErrors(IDBill.getErrors());

        if (PaymentMethod instanceof PaymentMethodValue &&   PaymentMethod.hasErrors())
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
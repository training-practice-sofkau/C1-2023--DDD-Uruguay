import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { SaleAgregate } from "src/subdomains/STORE/contexts/Customer-Service/domain/aggregates/sale.agregate";
import { BillDomain, IBillEntity } from "src/subdomains/STORE/contexts/Customer-Service/domain/entities";
import { IUpdateTotal, TotalUpdatedResponse } from "src/subdomains/STORE/contexts/Customer-Service/domain/interfaces";
import { BillDomainService } from "src/subdomains/STORE/contexts/Customer-Service/domain/services";
import { IdbillValue, PaymentMethodValue, TotalValue } from "src/subdomains/STORE/contexts/Customer-Service/domain/value-objects";
import { TotalModifiedEventPublisher} from "src/subdomains/STORE/contexts/Customer-Service/domain/events/publishers/Sale/Bill/modified-total-event-publisher"
export class UpdateTotalUseCase<
    Command extends IUpdateTotal = IUpdateTotal,
    Response extends TotalUpdatedResponse = TotalUpdatedResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly SaleAgregate: SaleAgregate;

    constructor(
        private readonly billService: BillDomainService,
        private readonly TotalModifiedEventPublisher: TotalModifiedEventPublisher,
    ) {
        super();
        this.SaleAgregate = new SaleAgregate({
            billService,
            TotalModifiedEventPublisher
            
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
        const IDBill =  new IdbillValue(command.idBill)
        const Total  = new  TotalValue (command.total)
        return {
            IDBill,
            Total
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
                'Hay algunos errores en el comando ejecutado para cambiar el metodo de pago del manga  ',
                this.getErrors(),
            );

    }

    private createEntityClientDomain(
        
        valueObject: BillDomain

    ): BillDomain {
       
        const {
            IDBill,
            Total
        } = valueObject

        return new BillDomain({          
            IDBill: IDBill,
            Total: Total
        })

    }

    private exectueOrderAggregateRoot(
        entity: BillDomain,
    ): Promise<BillDomain | null> {
        return this.SaleAgregate.UpdatePaymentMethod(entity)
    }
}
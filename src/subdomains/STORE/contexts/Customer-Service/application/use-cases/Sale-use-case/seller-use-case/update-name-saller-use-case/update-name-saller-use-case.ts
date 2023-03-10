import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { SaleAgregate } from "src/subdomains/STORE/contexts/Customer-Service/domain/aggregates/sale.agregate";
import { BillDomain, IBillEntity, ISellerEntity, SellerDomain } from "src/subdomains/STORE/contexts/Customer-Service/domain/entities";
import { IUpdateNameSeller, IUpdateTotal, SellerNameUpdatedResponse, TotalUpdatedResponse } from "src/subdomains/STORE/contexts/Customer-Service/domain/interfaces";
import { BillDomainService, SellerDomainService } from "src/subdomains/STORE/contexts/Customer-Service/domain/services";
import { IdbillValue, IdsellerValue, NameSellerValue, PaymentMethodValue, TotalValue } from "src/subdomains/STORE/contexts/Customer-Service/domain/value-objects";
import { TotalModifiedEventPublisher} from "src/subdomains/STORE/contexts/Customer-Service/domain/events/publishers/Sale/Bill/modified-total-event-publisher"
import { SellerNameModifiedEventPublisher } from "src/subdomains/STORE/contexts/Customer-Service/domain/events/publishers/Sale/Seller/modified-Seller-name-event-publisher"
export class UpdateNameSallerUseCase<
    Command extends   IUpdateNameSeller = IUpdateNameSeller,
    Response extends SellerNameUpdatedResponse = SellerNameUpdatedResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly SaleAgregate: SaleAgregate;

    constructor(
        private readonly sellerService: SellerDomainService,
        private readonly SellerNameModifiedEventPublisher: SellerNameModifiedEventPublisher,
    ) {
        super();
        this.SaleAgregate = new SaleAgregate({
            sellerService,
            SellerNameModifiedEventPublisher
            
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<SellerDomain | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createentityNameSellerUpdate(ValueObject);
        return this.exectueSaleAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): ISellerEntity {
        const IdSeller =  new IdsellerValue (command.idseller)
        const Name  = new  NameSellerValue (command.name)
        return {
            IdSeller,
            Name
        }
    }

    private validateValueObject(
        valueObject: SellerDomain
    ): void {
        
        const {
            IdSeller,
            Name
        } = valueObject
      
      
        if ( IdSeller.hasErrors())
        this.setErrors(IdSeller.getErrors());

        if (Name.hasErrors())
            this.setErrors(Name.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para cambiar el metodo de pago del manga  ',
                this.getErrors(),
            );

    }

    private createentityNameSellerUpdate(
        
        valueObject: SellerDomain

    ): SellerDomain {
       
        const {
            IdSeller,
            Name
        } = valueObject

        return new SellerDomain({          
            IdSeller: IdSeller,
            Name: Name
        })

    }

    private exectueSaleAggregateRoot(
        entity: SellerDomain,
    ): Promise<SellerDomain | null> {
        return this.SaleAgregate.UpdateNameSeller(entity)
    }
}
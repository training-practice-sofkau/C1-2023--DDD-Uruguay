import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { SaleAgregate } from "src/subdomains/Store/contexts/Customer-Service/domain/aggregates";
import { SellerDomain, ISellerEntity } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { SellerNameModifiedEventPublisher } from "src/subdomains/Store/contexts/Customer-Service/domain/events/publishers/Sale";
import { IUpdateNameSeller } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands";
import { SellerNameUpdatedResponse } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/responses/Sale-Response";
import { SellerDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { IdsellerValue, NameSellerValue } from "src/subdomains/Store/contexts/Customer-Service/domain/value-objects";

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
      
      
        if ( IdSeller instanceof IdsellerValue && IdSeller.hasErrors())
        this.setErrors(IdSeller.getErrors());

        if (Name instanceof NameSellerValue && Name.hasErrors())
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
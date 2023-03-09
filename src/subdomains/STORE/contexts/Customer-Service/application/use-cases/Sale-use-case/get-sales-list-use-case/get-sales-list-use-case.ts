import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { SaleAgregate } from "../../../../domain/aggregates/sale.agregate";
import { SaleDomainEntity } from "../../../../domain/entities";
import { IGetSalesList, SalesObtainedResponse } from "../../../../domain/interfaces";
import { SaleDomainService } from "../../../../domain/services";
import { SalesObtainedEventPublisher } from '../../../../domain/events/publishers/Sale/sales-obtained-event-publisher';
import { DateValue } from "../../../../domain/value-objects/Sale/Bill/date-value";

export class GetSalesListUseCase<
    Command extends IGetSalesList = IGetSalesList,
    Response extends SalesObtainedResponse =  SalesObtainedResponse

>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly SaleAgregate: SaleAgregate;
    database: SaleDomainEntity[]  = [];

    constructor(
        private readonly saleService: SaleDomainService,
        private SalesObtainedEventPublisher : SalesObtainedEventPublisher,
    ) {
        super();
        this.SaleAgregate = new SaleAgregate({
            saleService,
            SalesObtainedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise< SaleDomainEntity | null> {
        const ValueObject = this.getSale(command.IdSale);
        this.validateValueObject(ValueObject);
        return this.execueteGetorderRoot(ValueObject)
    }


    private getSale(
        idmanga: string
    ): SaleDomainEntity {
        return this.database.find((item) => item.IDSale.valueOf === idmanga.valueOf);
        

       
    }

    private validateValueObject(
        valueObject: SaleDomainEntity
    ): void {
        const {
          Bill:{
            Date,
            IDBill,
            IdClinet,
            IdManga,
            PaymentAmount,
            PaymentMethod,
            Total
          },
          IDOrder,
          IDSale,
          Seller:{
            IdSeller,
            Name
          },

        } = valueObject
      

        if ( IdManga.hasErrors())
        this.setErrors(IdManga.getErrors());    

        if (Date instanceof DateValue && Date.hasErrors())
            this.setErrors(Date.getErrors());    

        if ( IDBill.hasErrors())
            this.setErrors(IDBill.getErrors());

        if (IdClinet.hasErrors())
            this.setErrors(IdClinet.getErrors());    

        if ( PaymentAmount.hasErrors())
            this.setErrors(PaymentAmount.getErrors());

        if (PaymentMethod.hasErrors())
            this.setErrors(PaymentMethod.getErrors());


        if (Total.hasErrors())
            this.setErrors(Total.getErrors());

        if (IdSeller.hasErrors())
            this.setErrors(IdSeller.getErrors());

        if (IDSale.hasErrors())
            this.setErrors(IDSale.getErrors());

        if (Name.hasErrors())
            this.setErrors(Name.getErrors());

        if (IDOrder.hasErrors())
            this.setErrors(IDOrder.getErrors());



        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para obtener datos',
                this.getErrors(),
            );

    }
  

    private execueteGetorderRoot(
        entity: SaleDomainEntity,
    ): Promise<SaleDomainEntity > {     

        return this.SaleAgregate.GetSalesList({IdSale: entity.IDSale.toString()})
    }}

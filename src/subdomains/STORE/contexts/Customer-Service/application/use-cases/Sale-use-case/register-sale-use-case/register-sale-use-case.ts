import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { SaleAgregate } from "../../../../domain/aggregates";
import { SaleDomainEntity } from "../../../../domain/entities";
import { SalesObtainedEventPublisher } from "../../../../domain/events/publishers/Sale";
import { IRegisterSale } from "../../../../domain/interfaces/commands";
import { SaleDomainService } from "../../../../domain/services";
import { IdOrdertValueObject, IdSaleValueObject } from "../../../../domain/value-objects";
import { GetBillUseCase } from "../get-bill-use-case";
import { GetSellerUseCase } from "../get-seller-use-case";


export class RegisterSaleUseCase<
    Command extends IRegisterSale = IRegisterSale,
    Response extends SalesObtainedEventPublisher = SalesObtainedEventPublisher
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly SaleAgregate: SaleAgregate;
    private readonly GetBillUseCase: GetBillUseCase
    private readonly GetSellerUseCase: GetSellerUseCase

    constructor(
        private readonly saleService: SaleDomainService,
        private readonly SalesObtainedEventPublisher: SalesObtainedEventPublisher,
        
    ) {
        super();
        this.SaleAgregate = new SaleAgregate({
            saleService,
            SalesObtainedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<SaleDomainEntity | null> {
        const entity = this.createentitySaleDomain(command);
        this.validateValueObject((await entity));

        return this.exectueSaleAggregateRoot((await entity ))
    }


    private validateValueObject(
        valueObject: SaleDomainEntity
    ): void {
        const {
            IDOrder,                       
            IDSale, 
        } = valueObject
      

        if (IDOrder instanceof IdOrdertValueObject && IDOrder.hasErrors())
            this.setErrors(IDOrder.getErrors());    

        if (IDSale instanceof IdSaleValueObject  && IDSale.hasErrors())
            this.setErrors(IDSale.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para crear cliente',
                this.getErrors(),
            );

    }

    private async createentitySaleDomain(
        Command : Command
    ): Promise<SaleDomainEntity> {
        const responseBill = this.GetBillUseCase.execute({ BillID: Command.Billid })
        
        const responseSeller = this.GetSellerUseCase.execute({SellerId: Command.Sellerid})

        const IDSale =  new IdSaleValueObject(Command.IDSale)
        const IDOrder = new IdOrdertValueObject(Command.IDOrder);



        if (!responseBill  || !responseSeller) 
        {  throw new ValueObjectException(
            'Error al obtener datos ',
            this.getErrors(),
        ); }


        return new SaleDomainEntity({
          
            Bill: (await responseBill).data ,
            IDOrder: IDOrder,
            IDSale:  IDSale,
            Seller: (await responseSeller).data,
        })

    }

    private exectueSaleAggregateRoot(
        entity: SaleDomainEntity,
    ): Promise<SaleDomainEntity | null> {
        return this.SaleAgregate.RegisterSale(entity)
    }
}
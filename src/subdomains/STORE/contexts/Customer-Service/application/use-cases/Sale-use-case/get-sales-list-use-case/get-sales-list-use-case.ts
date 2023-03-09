import { ValueObjectErrorHandler, IUseCase } from "src/libs";
import { SaleAgregate } from "../../../../domain/aggregates/sale.agregate";
import { SaleDomainEntity } from "../../../../domain/entities";
import { IGetSalesList, SalesObtainedResponse } from "../../../../domain/interfaces";
import { SaleDomainService } from "../../../../domain/services";
import { SalesObtainedEventPublisher } from '../../../../domain/events/publishers/Sale/sales-obtained-event-publisher';

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
        return this.execueteGetorderRoot(ValueObject)
    }


    private getSale(
        idmanga: string
    ): SaleDomainEntity {
        return this.database.find((item) => item.IDSale.valueOf === idmanga.valueOf);
               
    }
   

    private execueteGetorderRoot(
        entity: SaleDomainEntity,
    ): Promise<SaleDomainEntity > {     

        return this.SaleAgregate.GetSalesList({IdSale: entity.IDSale.toString()})
    }}

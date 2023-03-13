import { ValueObjectErrorHandler, IUseCase } from "src/libs";
import { SaleAgregate } from "../../../../domain/aggregates";
import { SellerDomain } from "../../../../domain/entities";
import { SellerObtainedEventPublisher } from "../../../../domain/events/publishers/Sale";
import { IGetSellerData } from "../../../../domain/interfaces/commands";
import { SellerObtainResponse } from "../../../../domain/interfaces/responses/Sale-Response";
import { SaleDomainService } from "../../../../domain/services";


export class GetSellerUseCase<
    Command extends IGetSellerData = IGetSellerData,
    Response extends SellerObtainResponse =  SellerObtainResponse

>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly SaleAgregate: SaleAgregate;

    constructor(
        private readonly saleService: SaleDomainService,
        private SellerObtainedEventPublisher : SellerObtainedEventPublisher,
    ) {
        super();
        this.SaleAgregate = new SaleAgregate({
            saleService,
            SellerObtainedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise< SellerDomain | null> {
        return this.SaleAgregate.GetSellers(command.SellerId)    }



   

   }

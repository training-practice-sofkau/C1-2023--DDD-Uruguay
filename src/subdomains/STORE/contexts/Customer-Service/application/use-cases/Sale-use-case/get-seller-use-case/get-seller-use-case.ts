import { ValueObjectErrorHandler, IUseCase } from "src/libs";
import { SaleAgregate } from "../../../../domain/aggregates/sale.agregate";
import { BillDomain, SaleDomainEntity, SellerDomain } from "../../../../domain/entities";
import { IGetSalesList, SalesObtainedResponse } from "../../../../domain/interfaces";
import { SaleDomainService } from "../../../../domain/services";
import { SalesObtainedEventPublisher } from '../../../../domain/events/publishers/Sale/sales-obtained-event-publisher';
import { BillObtainResponse } from "../../../../domain/interfaces/responses/Sale-Response/Bill-Response/bill-obtain-response copy";
import { BillModifiedEventPublisher } from "../../../../domain/events";
import { BillObtainedEventPublisher } from "../../../../domain/events/publishers/Sale/Bill/bill-obtained.publish-event";
import { IBillCommand } from "../../../../domain/interfaces/commands/Sale-commands/Bill-Comands/get-bill-data-command copy";
import { SellerObtainedEventPublisher } from "../../../../domain/events/publishers/Sale/Seller/seller-obtained.publish-event";
import { SellerObtainResponse } from "../../../../domain/interfaces/responses/Sale-Response/Seller-Response/seller-obtain-response copy";
import { IGetSellerData } from "../../../../domain/interfaces/commands/Sale-commands/Seller-Commands/get-seller-data-command";

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

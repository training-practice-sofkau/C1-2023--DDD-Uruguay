import { Controller, Get, Body, Post } from "@nestjs/common";
import { GetSalesListUseCase, RegisterSaleUseCase } from "../../application";
import { IAddedSaleEventPublisher, ISalesObtainedEventPublisher } from "../messaging/publisher/Sale";
import { SaleService } from "../persitence";
import { IGetSales } from "../utils/commands/sale/IGetSales";
import { IRegisterSaleCommand } from "../utils/commands/sale/IRegisterSale";


@Controller('Sale')
export class SaleController {


    constructor(
        private readonly SaleService: SaleService,
        private readonly ISalesObtainedEventPublisher: ISalesObtainedEventPublisher,
        private readonly IAddedSaleEventPublisher:  IAddedSaleEventPublisher
      
    
    
      ) {}


    @Get()
    getSale(@Body() command: IGetSales) {
      const useCase = new  GetSalesListUseCase (this.SaleService,  this.ISalesObtainedEventPublisher)
      return useCase.execute(command)
      
    }

    @Post()
    createSale(@Body() command: IRegisterSaleCommand) {
      const useCase = new RegisterSaleUseCase(
        this.SaleService,
        this.IAddedSaleEventPublisher,
      );
      useCase.execute(command);
    }



}

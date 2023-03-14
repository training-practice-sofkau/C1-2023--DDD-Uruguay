/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get } from '@nestjs/common';
import { GetBillUseCase, GetClientCaseUse } from '../../application';
import { IupdatePaymentMethod } from '../utils/commands/sale/IupdatePaymentMethod';
import { BillService } from '../persitence/services/SaleServices/BillService';
import { BillMySqlService } from '../persitence/databases/mysql/services/IBill-Domain-Service';
import { SaleService } from '../persitence/services/SaleServices/SaleService';
import { IBillObtainedEventPublisher } from '../messaging/publisher/Sale/IBillObtainedEventPublisher';
import { IGetBill } from '../utils/commands/sale/IGetBill';

@Controller('Bill')
export class BillControllerController {


    constructor(
        private readonly BillService: BillService,
        private readonly SaleService: SaleService,
        private readonly IBillObtainedEventPublisher:IBillObtainedEventPublisher
    
    
      ) {}


    @Get()
    getClient(@Body() command: IGetBill) {
      const useCase = new  GetBillUseCase (this.SaleService,  this.IBillObtainedEventPublisher)
      return useCase.execute(command)
      
    }


}

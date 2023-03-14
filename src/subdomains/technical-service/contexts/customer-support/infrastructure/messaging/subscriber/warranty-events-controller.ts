import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";

@Controller()
export class WarrantyEventsController{

    @EventPattern('technical-service.warranty-end-date-changed')
    warrantyEndDateChanged(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')

    }   
    
    @EventPattern('technical-service.warranty-status-changed')
    warrantyStatusChanged(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')

    }   

}
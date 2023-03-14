import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";

@Controller()
export class RepairsEventsController{

    @EventPattern('technical-service.repair-added')
    repairDetailsAdded(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')

    }   

    
    @EventPattern('technical-service.work-status-changed')
    workStatusChanged(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')

    }   

}
import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";

@Controller()
export class SupportTicketEventsController{

    @EventPattern('technical-service.support-ticket-opened')
    supportTicketOpened(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')

    }


    @EventPattern('technical-service.support-ticket-closed')
    supportTicketClosed(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')

    }

    

}
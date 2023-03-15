import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";
import { EventMySqlEntity, EventRepository } from "../../persistence/";


@Controller()
export class RoleEventsController{
 
    constructor(
        private readonly eventRepository: EventRepository
    ){ }
 

    @EventPattern('customer-support.role-created')
    roleCreated(@Payload() data: any, @Ctx() context: KafkaContext){

        this.registerEvent(context.getTopic(), data);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context.getTopic())
        console.log('--------------------------------------')

    }   

    @EventPattern('customer-support.role-description-changed')
    roleDescriptionChanged(@Payload() data: any, @Ctx() context: KafkaContext){


        this.registerEvent(context.getTopic(), data);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')

    }   



    /**
     * registers the event in DB
     *
     * @private
     * @param {string} sender
     * @param {*} data
     * @memberof RoleEventsController
     */
     private registerEvent(sender: string, data: any) {
        const event = new EventMySqlEntity();

        event.data = data;
        event.type = sender;
        event.createdAt = Date.now() as unknown as string;

        this.eventRepository.create(event);
    }
}


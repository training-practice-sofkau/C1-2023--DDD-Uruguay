import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";

@Controller()
export class CounterController {

    /**
     * EventPattern se utiliza para definir un patrón de evento de Kafka
     * al que el controlador responderá.
     * 
     * Payload se utiliza para extraer los datos del mensaje del evento.
     *
     * KafkaContext que se utiliza para acceder a los metadatos del contexto de Kafka.
     * 
     * En el contexto de los eventos Kafka, el término "payload"
     * se refiere a los datos contenidos en el mensaje del evento. 
     * En otras palabras, el payload es la carga útil de información 
     * que se envía en el mensaje de Kafka.
     * 
     * @param {*} data
     * @param {KafkaContext} context
     * @memberof CounterController
     */
    @EventPattern('store.counter-created')
    counterCreated(@Payload() data: any, @Ctx() context: KafkaContext) {

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('store.product-created')
    productCreated(@Payload() data: any, @Ctx() context: KafkaContext) {

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('store.poster-created')
    posterCreated(@Payload() data: any, @Ctx() context: KafkaContext) {

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('store.getted-poster')
    gettedPoster(@Payload() data: any, @Ctx() context: KafkaContext) {

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('store.getted-product')
    gettedProduct(@Payload() data: any, @Ctx() context: KafkaContext) {

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }
}
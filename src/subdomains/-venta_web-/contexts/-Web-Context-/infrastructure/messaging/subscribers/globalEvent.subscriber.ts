import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";

@Controller()
export class GlobalControllerEvent{

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
     * @memberof CreatedClientController
     */

    //*****************MEMBERSHIP*************************** */

    @EventPattern('venta-web-system.compra-creada')
    compraCreada(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }


    @EventPattern('venta-web-system.cliente-creado')
    clienteCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('venta-web-system.curso-creado')
    cursoCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    //*******************CURSO********************** */

    @EventPattern('venta-web-system.curso-conseguido')
    cursoConseguido(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('venta-web-system.update-costo-curso')
    updatedCostoCurso(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    //*******************CUPON********************* */

    @EventPattern('venta-web-system.cupon-conseguido')
    cuponConseguido(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('venta-web-system.update-porcentaje-cupon')
    updatedPorcentajeCupon(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    //*****************CLIENTE******************* */

    @EventPattern('venta-web-system.update-phone')
    updatedClientePhone(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('venta-web-system.cliente-conseguido')
    clienteConseguido(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    //******************MEMBERSHIP*************** */

    @EventPattern('venta-web-system.membresia-creada')
    membresiaCreada(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('venta-web-system.plan-creado')
    planCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    //*********************PLAN***************************** */

    @EventPattern('venta-web-system.plan-conseguido')
    planConseguido(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }



    @EventPattern('venta-web-system.update-costo-plan')
    updatedCostopPlan(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('venta-web-system.update-nombre-plan')
    updatedPlanNombre(@Payload() data: any, @Ctx() context: KafkaContext){

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

}
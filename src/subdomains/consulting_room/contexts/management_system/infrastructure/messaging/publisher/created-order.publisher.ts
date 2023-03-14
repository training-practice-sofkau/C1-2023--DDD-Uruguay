import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { RegisteredOrderEventPublisherBase } from '../../../domain';

import { OrderEntity } from '../../persistence';
import { IEventPublisher } from '@sofka';

export class CreateOrderPublisher extends RegisteredOrderEventPublisherBase {
    /**
     * ClientProxy es una clase proporcionada por
     * @nestjs/microservices que se utiliza para 
     * conectarse a un broker de mensajería 
     * (como RabbitMQ o Kafka) y enviar y recibir mensajes.
     * 
     * Creates an instance of CreateOrderPublisher.
     * @param {ClientProxy} proxy
     * @memberof CreateOrderPublisher
     */
    constructor(

        @Inject('CONSULTORY_CONTEXT') private readonly proxy: ClientProxy,
    ) {
        super(proxy as unknown as IEventPublisher);
    }


    /**
     * El método emit en CreateOrderPublisher utiliza lastValueFrom de rxjs
     *  para enviar un mensaje al broker de mensajería utilizando el ClientProxy inyectado.
     *  El mensaje que se envía es un objeto pattern y data. pattern es una cadena
     *  que identifica el tipo de evento que se está enviando,
     *  y data es la información específica del evento que se está enviando.
     *
     * @template Result
     * @template Input
     * @param {*} pattern
     * @param {Input} data
     * @return {*}  {Promise<Result>}
     * @memberof CreateOrderPublisher
     */
    emit<Result = any, Input = OrderEntity>(
        pattern: any,
        data: Input,
    ): Promise<Result> {
        return lastValueFrom<Result>(this.proxy.emit(pattern, data));
    }

}
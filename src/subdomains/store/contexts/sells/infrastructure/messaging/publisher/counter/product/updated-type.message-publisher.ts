import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { IEventPublisher } from 'src/libs/sofka';
import { ProductUpdatedTypeEventPublisherBase } from 'src/subdomains/store/contexts/sells/domain';
import { ProductEntity } from '../../../../persistence/entities';

@Injectable()
export class UpdatedTypePublisher extends ProductUpdatedTypeEventPublisherBase {
    /**
     * ClientProxy es una clase proporcionada por
     * @nestjs/microservices que se utiliza para 
     * conectarse a un broker de mensajería 
     * (como RabbitMQ o Kafka) y enviar y recibir mensajes.
     * 
     * Creates an instance of UpdatedTypePublisher.
     * @param {ClientProxy} proxy
     * @memberof UpdatedTypePublisher
     */
    constructor(

        @Inject('STORE_CONTEXT') private readonly proxy: ClientProxy,
    ) {
        super(proxy as unknown as IEventPublisher);
    }

    /**
     * El método emit en UpdatedTypePublisher utiliza lastValueFrom de rxjs
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
     * @memberof UpdatedTypePublisher
     */
    emit<Result = any, Input = ProductEntity>(
        pattern: any,
        data: Input,
    ): Promise<Result> {
        return lastValueFrom<Result>(this.proxy.emit(pattern, data));
    }
}
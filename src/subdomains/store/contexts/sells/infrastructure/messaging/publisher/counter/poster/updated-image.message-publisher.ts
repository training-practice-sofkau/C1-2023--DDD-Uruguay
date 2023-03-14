import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { IEventPublisher } from 'src/libs/sofka';
import { PosterUpdatedImageEventPublisherBase } from 'src/subdomains/store/contexts/sells/domain';
import { PosterEntity } from '../../../../persistence/entities';

@Injectable()
export class UpdatedImagePublisher extends PosterUpdatedImageEventPublisherBase {
    /**
     * ClientProxy es una clase proporcionada por
     * @nestjs/microservices que se utiliza para 
     * conectarse a un broker de mensajería 
     * (como RabbitMQ o Kafka) y enviar y recibir mensajes.
     * 
     * Creates an instance of UpdatedImagePublisher.
     * @param {ClientProxy} proxy
     * @memberof UpdatedImagePublisher
     */
    constructor(

        @Inject('STORE_CONTEXT') private readonly proxy: ClientProxy,
    ) {
        super(proxy as unknown as IEventPublisher);
    }

    /**
     * El método emit en UpdatedImagePublisher utiliza lastValueFrom de rxjs
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
     * @memberof UpdatedImagePublisher
     */
    emit<Result = any, Input = PosterEntity>(
        pattern: any,
        data: Input,
    ): Promise<Result> {
        return lastValueFrom<Result>(this.proxy.emit(pattern, data));
    }
}
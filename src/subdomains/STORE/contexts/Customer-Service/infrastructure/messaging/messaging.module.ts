/*
https://docs.nestjs.com/modules
*/
import { ClientAddEventPublisher } from "../../domain/events/publishers/order"

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { IClientAddEventPublisher, IOrderAddEventPublisher } from './publisher/order';

@Module({
    imports: [ClientsModule.register([
        {
            name: 'MANGA_STORE_CONTEXT',
            transport: Transport.KAFKA,
            options: {
                client: {
                    brokers:['localhost:9092'],
                },
                consumer: {
                    groupId:'consumer'
                }
            }
        },
    ]),],
    controllers: [],
    providers: [IOrderAddEventPublisher, IClientAddEventPublisher],
    exports: [IOrderAddEventPublisher, IClientAddEventPublisher],
})
export class MessagingModule { }

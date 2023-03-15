import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { IEventPublisher } from '@sofka';
import { InvoiceMarkedAsPaidEventPublisherBase } from '../../../domain/events/publishers/';
import { InvoiceEntity } from '../../persistence/entities/invoice.entity';


export class InvoiceMarkedAsPaidPublisher extends InvoiceMarkedAsPaidEventPublisherBase{

    constructor(
        @Inject('TECHNICAL-SERVICE_CONTEXT') private readonly proxy: ClientProxy)
        {
            super(proxy as unknown as IEventPublisher);
        }


        emit<Result = any, Input = InvoiceEntity>(
            pattern: any,
            data: Input,
        ): Promise<Result> {
            return lastValueFrom<Result>(this.proxy.emit(pattern, data));
        }
    }
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IEventPublisher } from '@sofka';
import { lastValueFrom } from 'rxjs';
import { RegisteredClientEventPublisherBase } from '../../../domain';
import { ClientEntity } from '../../persistence/entities/client.entity';
@Injectable()
export class CreatedClientPublisher extends RegisteredClientEventPublisherBase {
    constructor(@Inject('CONSULTORY_CONTEXT') private readonly proxy: ClientProxy) {
        super(proxy as unknown as IEventPublisher);
    }

    // send<Result, Input = UserEntity>(pattern: any, data: Input): Promise<Result> {
    //   return lastValueFrom<Result>(this.proxy.send(pattern, data));
    // }

    emit<Result = any, Input = ClientEntity>(
        pattern: any,
        data: Input,
    ): Promise<Result> {
        return lastValueFrom<Result>(this.proxy.emit(pattern, data));
    }
}


import { ClientProxy } from '@nestjs/microservices';
import { IEventPublisher } from 'src/libs/sofka/interface/event-publisher.interface';
import { Injectable, Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { TraspasoEntity } from '../../../../persistence/entities/traspaso.entity';
import { EquipoTraspasoModificadoEventPublisher } from '../../../../../domain/events/publishers/traspaso/equipo-modificado.event-publisher';



@Injectable()
export class  ModificarEquiposalidaTraspasoPublisher extends EquipoTraspasoModificadoEventPublisher {
    constructor(@Inject('RRHH_CONTEXT') private readonly proxy: ClientProxy) {
        super(proxy as unknown as IEventPublisher);
    }

    // send<Result, Input = UserEntity>(pattern: any, data: Input): Promise<Result> {
    //   return lastValueFrom<Result>(this.proxy.send(pattern, data));
    // }

    emit<Result = any, Input = TraspasoEntity>(
        pattern: any,
        data: Input,
    ): Promise<Result> {
        return lastValueFrom<Result>(this.proxy.emit(pattern, data));
    }
}
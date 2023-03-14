import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { IEventPublisher } from "src/libs";
import {  UpdatePorcentajeEventPublisher } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";
import { CuponMySqlEntity } from "../../../../persistence";
import { lastValueFrom } from "rxjs";


@Injectable()
export class UpdatePorcentajeCuponPublisher extends UpdatePorcentajeEventPublisher {
    constructor(@Inject('CONSULTORY_CONTEXT') private readonly proxy: ClientProxy) {
        super(proxy as unknown as IEventPublisher);
    }


    emit<Result = any, Input = CuponMySqlEntity>(
        pattern: any,
        data: Input,
    ): Promise<Result> {
        return lastValueFrom<Result>(this.proxy.emit(pattern, data));
    }
}
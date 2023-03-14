import { Injectable } from "@nestjs/common";

import { IRepartidorDomainService } from "../../../../../../domain/services";
import { RepartidorMySqlEntity } from "../../entities/ticket";
import { RepartidorMySqlRepository } from '../../repositories/ticket';

@Injectable()
export class RepartidorMySqlService
    implements IRepartidorDomainService<RepartidorMySqlEntity> {

    constructor(
        private readonly repartidorRepository: RepartidorMySqlRepository,
    ) { }
    
    
    crearRepartidor(repartidor: RepartidorMySqlEntity): Promise<RepartidorMySqlEntity> {
        return this.repartidorRepository.create(repartidor);
    }
    
    getRepartidor(repartidorId: string): Promise<RepartidorMySqlEntity> {
        return this.repartidorRepository.findById(repartidorId);
    }
    
    cambiarNombre(repartidorId: string, nuevoNombre: string): Promise<string> {
        return this.repartidorRepository.updateNombre(repartidorId, nuevoNombre);
    }
    cambiarVehiculo(repartidorId: string, nuevoVehiculo: string): Promise<string> {
        return this.repartidorRepository.updateVehiculo(repartidorId, nuevoVehiculo);
    }

}
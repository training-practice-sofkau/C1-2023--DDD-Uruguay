import { Injectable } from "@nestjs/common";

import { IPlatoPrincipalDomainService } from "../../../../../../domain/services";
import { PlatoPrincipalMySqlEntity } from "../../entities/pedido";
import { PlatoPrincipalMySqlRepository } from '../../repositories/pedido';

@Injectable()
export class PlatoPrincipalMySqlService
    implements IPlatoPrincipalDomainService<PlatoPrincipalMySqlEntity> {

    constructor(
        private readonly platoPrincipalRepository: PlatoPrincipalMySqlRepository,
    ) { }


    crearPlatoPrincipal(platoPrincipal: PlatoPrincipalMySqlEntity): Promise<PlatoPrincipalMySqlEntity> {
        return this.platoPrincipalRepository.create(platoPrincipal);
    }

    getPlatoPrincipal(platoPrincipalId: string): Promise<PlatoPrincipalMySqlEntity> {
        return this.platoPrincipalRepository.findById(platoPrincipalId);
    }

    cambiarNombre(platoPrincipalId: string, nuevoNombre: string): Promise<string> {
        return this.platoPrincipalRepository.updateNombre(platoPrincipalId, nuevoNombre);
    }

    cambiarGuarnicion(platoPrincipalId: string, nuevaGuarnicion: string): Promise<string> {
        return this.platoPrincipalRepository.updateGuarnicion(platoPrincipalId, nuevaGuarnicion);
    }

}